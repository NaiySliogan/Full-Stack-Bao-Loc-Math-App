import React, { useState, useCallback } from "react";
import Header from "./components/Layout/Header";
import Board from "./components/Board/Board";
// import MoviesList from "./components/MoviesList";
import Button from "./components/UI/Button";
import classes from "./App.module.css";

function App() {
  const [solution, setSolution] = useState({
    id: null,
    solution: [],
    dateEnregistrement: null,
    dureeExecution: null,
  });
  const [checkClick, setCheckClick] = useState(false);
  const [isClean, setIsClean] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [manualSolution, setManualSolution] = useState([]);

  const fetchSolutionsHandler = useCallback(async () => {
    setCheckClick(false);
    setIsClean(false);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/crack");
      // console.log(response);
      if (!response.ok) {
        throw new Error("Il y a eu un problème.");
      }

      const data = await response.json();
      console.log(data);

      const transformedSolution = {
        id: data.id,
        solution: [...data.solution].map(Number),
        dateEnregistrement: data.dateEnregistrement,
        dureeExecution: data.dureeExecution,
      };

      console.log("Transform :" + transformedSolution.solution);
      setSolution(transformedSolution);
      // console.log("sol : " + solution.solution);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
    setCheckClick(true);
  }, []);

  const addManualSolution = (enteredSolution) => {
    setManualSolution(enteredSolution);
    setSolution({ solution: enteredSolution });
    console.log("valeur energistrée : " + enteredSolution);
    console.log(solution);
  };
  const endPuzzleResolutionHandler = (event) => {
    setCheckClick(false);
  };

  const isCleanHandler = () => {
    setIsClean(true);
  };
  const changeSolutionHandler = (event) => {
    setSolution({
      solution: event,
    });
  };

  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, [fetchMoviesHandler]);

  let content = <p></p>;

  if (solution.length === 0 && checkClick) {
    content = <p>Aucunes solutions trouvées.</p>;
  } else if (solution.length > 0 && checkClick) {
    // content = <Board  />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Chargement...</p>;
  }

  return (
    <>
      <Header />
      <Board
        sol={solution.solution}
        setSol={changeSolutionHandler}
        checkPuzzleResolution={checkClick}
        endPuzzleResolution={endPuzzleResolutionHandler}
        onSaveSolution={addManualSolution}
        isClean={isClean}
        onCleaning={isCleanHandler}
      />
      <section className={classes.section}>
        <Button onClick={fetchSolutionsHandler}>Résoudre le puzzle</Button>
        {content}
      </section>
    </>
  );
}

export default App;
