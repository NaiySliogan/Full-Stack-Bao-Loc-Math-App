import React, { useState, useCallback, useEffect } from "react";
import Header from "./components/Layout/Header";
import Board from "./components/Board/Board";
import PutSolution from "./components/PutSolution";
import ListResult from "./components/ListResult";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";
import classes from "./App.module.css";

function App() {
  const [solution, setSolution] = useState({
    id: 0,
    solution: [],
    dateEnregistrement: null,
    dureeExecution: null,
  }); //Solution avec laquelle on travaille | solution : array
  const [manualSolution, setManualSolution] = useState({
    id: 0,
    solution: "",
    dateEnregistrement: null,
    dureeExecution: 0,
  }); //Solution que l'on renvoit à la base de donnée. | solution : string

  const [checkClick, setCheckClick] = useState(false); // Vérifie si la résolution du puzzle à été demandée
  const [isLoading, setIsLoading] = useState(false); // Résolution du puzzle en cours
  const [error, setError] = useState(null);

  const [askValidation, setAskValidation] = useState(); //Condition d'apparition du popup et message du popup
  const [checkValidation, setCheckValidation] = useState(false); //Si true : autorise la requete PUT.
  const [checkDeleteRequest, setCheckDeleteRequest] = useState(false); // true si requete DELETE en cours

  const [resultsAreLoading, setResultsAreLoading] = useState(false);
  const [listResult, setListResult] = useState([{}]);
  const [errorResult, setErrorResult] = useState(null);

  const acceptValidationHandler = () => {
    setAskValidation(null);
    setCheckValidation(true);
  };
  const refuseValidationHandler = () => {
    setAskValidation(null);
    setCheckValidation(false);
  };

  const checkDeleteRequestHandler = () => {
    setCheckDeleteRequest(true);
  };

  const endPuzzleResolutionHandler = (event) => {
    setCheckClick(false);
  };

  const changeSolutionHandler = (event) => {
    let id = Math.max(solution.id, 0);
    if (listResult.length){
      id=Math.max(id, listResult[listResult.length -1].id)
    }
    setSolution({
      id: id,
      solution: event,
    });
  };

  const changeManualSolutionHandler = (event) => {
    let id = Math.max(manualSolution.id, 0);
    if (listResult.length){
      id=Math.max(id, listResult[listResult.length -1].id)
    }
    setManualSolution({
      id: id,
      solution: event,
    });
  };

  //Demande au backend de trouver la solution et la récupère depuis la base de donnée.
  const fetchSolutionsHandler = useCallback(async () => {
    setCheckClick(false);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/crack");
      // console.log(response);
      if (!response.ok) {
        throw new Error("Il y a eu un problème.");
      }

      const data = await response.json();
      // console.log(data);
      setManualSolution(data);
      const transformedSolution = {
        id: data.id,
        solution: [...data.solution].map(Number),
        dateEnregistrement: data.dateEnregistrement,
        dureeExecution: data.dureeExecution,
      }; //Transforme la chaine de carractère en tableau de nombre

      setSolution(transformedSolution);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
    setCheckClick(true);
  }, []);

  //Fonction qui appelle la liste des résultats depuis la base de donnée
  const fetchResultHandler = useCallback(async () => {
    setResultsAreLoading(true);
    setError(null);
    try {
      const response = await fetch("/results");
      // console.log(response);
      if (!response.ok) {
        throw new Error("Il y a eu un problème.");
      }

      const data = await response.json();
      setListResult(data);
    } catch (errorResult) {
      setErrorResult(errorResult.message);
    }
    setCheckDeleteRequest(false);
    setResultsAreLoading(false);
  }, []);

  //Fonction qui vérifie le résultat et autorise ou non la requete PUT
  const addManualSolution = (enteredSolution) => {
    changeManualSolutionHandler(enteredSolution.join(""));
    changeSolutionHandler(enteredSolution);
    const a = enteredSolution[0],
      b = enteredSolution[1],
      c = enteredSolution[2],
      d = enteredSolution[3],
      e = enteredSolution[4],
      f = enteredSolution[5],
      g = enteredSolution[6],
      h = enteredSolution[7],
      i = enteredSolution[8];
    const resultat = a + (13 * b) / c + d + 12 * e - f - 11 + (g * h) / i - 10;
    if (resultat !== 66) {
      setAskValidation({
        //Appel un popup si le résultat est différent de 66.
        title: "Le resultat est différent",
        message: (
          <>
            <p>
              Le resultat de votre équation est de{" "}
              <span>{resultat.toFixed(2)}</span>. Il est donc différent de{" "}
              <span>66</span>.
            </p>
            <p>
              Pensez bien aux règles de priorité. L'equation se lit comme suit :
            </p>
            <p>
              a + (13 * b / c) + d + (12 * e) - f - 11 + (g * h / i) - 10 = 66
            </p>
            <span> Voulez-vous quand même enregistrer votre solution ? </span>
          </>
        ),
      });
    } else {
      //Validation automatique si le résultat est correct.
      setCheckValidation(true);
    }
  };

  useEffect(() => {
    fetchResultHandler();
  }, [
    fetchResultHandler,
    fetchSolutionsHandler,
    manualSolution,
    solution,
    checkValidation,
    checkDeleteRequest,
  ]);

  let content = <p className={classes.invisible}>OK</p>;

  if (error) {
    content = <p>{error}</p>;
  } else if (isLoading) {
    content = <p>Chargement...</p>;
  } else if (solution.length === 0 && checkClick) {
    content = <p>Aucunes solutions trouvées.</p>;
  } else if (solution.dureeExecution) {
    content = <p>Vitesse d'éxécution : {solution.dureeExecution} ms.</p>;
  }

  return (
    <>
      {askValidation && (
        <Modal
          validation={true} // Type du modal
          title={askValidation.title}
          message={askValidation.message}
          //onExit={askValidationHandler}
          onAccept={acceptValidationHandler}
          onRefuse={refuseValidationHandler}
        />
      )}
      <Header />
      <Board
        sol={solution.solution}
        setSol={changeSolutionHandler}
        checkPuzzleResolution={checkClick}
        endPuzzleResolution={endPuzzleResolutionHandler}
        onSaveSolution={addManualSolution}
      />
      <section className={classes.section}>
        <Button className={classes.button} onClick={fetchSolutionsHandler}>
          Résoudre l'équation
        </Button>
        {content}
        {checkValidation && (
          <PutSolution
            solution={manualSolution}
            onValidation={refuseValidationHandler}
          />
        )}
      </section>
      <ListResult
        listResult={listResult}
        loading={resultsAreLoading}
        error={errorResult}
        checkDeleteRequest={checkDeleteRequestHandler}
      />
    </>
  );
}

export default App;
