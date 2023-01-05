import { useState, useEffect } from "react";
import classes from "./Board.module.css";
import Cell from "./Cell";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const Board = (props) => {
  //Valeurs des 9 cases interractives du tableau
  const [valueA, setValueA] = useState();
  const [valueB, setValueB] = useState();
  const [valueC, setValueC] = useState();
  const [valueD, setValueD] = useState();
  const [valueE, setValueE] = useState();
  const [valueF, setValueF] = useState();
  const [valueG, setValueG] = useState();
  const [valueH, setValueH] = useState();
  const [valueI, setValueI] = useState();
  const [clean, setClean] = useState(false); //Si true : Demande de nettoyage du tableau
  const [error, setError] = useState(); // Condition d'apparition du popup : apparais si tableau mal remplis

  const onErrorHandler = () => {
    setError(null);
  };

  const valueAHandler = (enteredValue) => {
    setValueA(enteredValue);
  };
  const valueBHandler = (enteredValue) => {
    setValueB(enteredValue);
  };
  const valueCHandler = (enteredValue) => {
    setValueC(enteredValue);
  };
  const valueDHandler = (enteredValue) => {
    setValueD(enteredValue);
  };
  const valueEHandler = (enteredValue) => {
    setValueE(enteredValue);
  };
  const valueFHandler = (enteredValue) => {
    setValueF(enteredValue);
  };
  const valueGHandler = (enteredValue) => {
    setValueG(enteredValue);
  };
  const valueHHandler = (enteredValue) => {
    setValueH(enteredValue);
  };
  const valueIHandler = (enteredValue) => {
    setValueI(enteredValue);
  };

  //Vérification du remplissage du tableau
  function valueAreCorrect(solution) {
    let distinct = new Set(); // Il ne peux pas y avoir de doublons dans un set
    for (let i = 0; i < solution.length; i++) {
      if (
        !(Number.isInteger(solution[i]) && solution[i] >= 1 && solution[i] <= 9)
      ) {
        // Verification qu'il s'agisse bien de chiffre situés entre 1 et 9.
        //Et que toutes les cases soient bien remplies.
        setError({
          title: "Données invalides",
          message: (
            <>
              <p>Toutes les cases du tableau doivent être complétées.</p>
              <p>
                Les valeurs acceptées sont les chiffres situés entre 1 et 9.
              </p>
            </>
          ),
        });
        return false;
      }
      distinct.add(solution[i]);
    }
    if (distinct.size !== solution.length) {
      // Si tous les element sont differents les deux tableaux seront de la même taille
      setError({
        title: "Cases indentiques",
        message: <p>Le même chiffre ne peux pas être utilisé plus d'une fois.</p>,
      });
      return false;
    }

    return true;
  }
  const submitHandler = (event) => {
    event.preventDefault();
    // setClean(false);

    const solution = [
      valueA,
      valueB,
      valueC,
      valueD,
      valueE,
      valueF,
      valueG,
      valueH,
      valueI,
    ];
    if (valueAreCorrect(solution)) {
 
      props.onSaveSolution(solution);
    }
  };

  const cleanBoardHandler = () => {
    setClean(true);
    props.endPuzzleResolution();
    props.setSol(["", "", "", "", "", "", "", "", ""]);
  };
  const endCleanHandler = (event) => {
    setClean(false);
  };
  
  useEffect(() => {
    setClean(false); //Termine le nettoyage
  }, [props]);

  return (
    <>
      {/* Si erreur : popup */}
      {error && (
        <Modal
          validation={false} // Type du modal / popup
          title={error.title}
          message={error.message}
          onExit={onErrorHandler}
        />
      )}
      <form onSubmit={submitHandler} className={classes.board}>
        {/* Tableau de 7 par 6  avec des cases invisibles, des cases avec un chiffre ou un symbole et des cases interractives*/}
        <table>
          <tbody>
            <tr>
              <Cell
                sol={props.sol[0]} // Envoit la valeur obtenue par la résolution du puzzle
                checkPuzzleResolution={props.checkPuzzleResolution} // Vérifie si la résolution du puzzle à été demandé
                endPuzzleResolution={props.endPuzzleResolution} // Termine la résolution du puzzle
                onSaveValue={valueAHandler} // Valeur envoyé à la base de donnée
                clean={clean} // Demande de nettoyage du tableau
                endClean={endCleanHandler} // Fin de demande de nettoyage
              />
              <td className={classes["invisible-cell"]}></td>
              <Cell
                sol={props.sol[4]}
                checkPuzzleResolution={props.checkPuzzleResolution}
                endPuzzleResolution={props.endPuzzleResolution}
                onSaveValue={valueEHandler}
                clean={clean}
                endClean={endCleanHandler}
              />
              <td className={classes["default-cell"]}>-</td>
              <Cell
                sol={props.sol[5]}
                checkPuzzleResolution={props.checkPuzzleResolution}
                endPuzzleResolution={props.endPuzzleResolution}
                onSaveValue={valueFHandler}
                clean={clean}
                endClean={endCleanHandler}
              />
              <td className={classes["invisible-cell"]}></td>
              <td className={classes["default-cell"]}>66</td>
            </tr>
            <tr>
              <td className={classes["default-cell"]}>+</td>
              <td className={classes["invisible-cell"]}></td>
              <td className={classes["default-cell"]}>x</td>
              <td className={classes["invisible-cell"]}></td>
              <td className={classes["default-cell"]}>-</td>
              <td className={classes["invisible-cell"]}></td>
              <td className={classes["default-cell"]}>=</td>
            </tr>
            <tr>
              <td className={classes["default-cell"]}>13</td>
              <td className={classes["invisible-cell"]}></td>
              <td className={classes["default-cell"]}>12</td>
              <td className={classes["invisible-cell"]}></td>
              <td className={classes["default-cell"]}>11</td>
              <td className={classes["invisible-cell"]}></td>
              <td className={classes["default-cell"]}>10</td>
            </tr>
            <tr>
              <td className={classes["default-cell"]}>x</td>
              <td className={classes["invisible-cell"]}></td>
              <td className={classes["default-cell"]}>+</td>
              <td className={classes["invisible-cell"]}></td>
              <td className={classes["default-cell"]}>+</td>
              <td className={classes["invisible-cell"]}></td>
              <td className={classes["default-cell"]}>-</td>
            </tr>
            <tr>
              <Cell
                sol={props.sol[1]}
                checkPuzzleResolution={props.checkPuzzleResolution}
                endPuzzleResolution={props.endPuzzleResolution}
                onSaveValue={valueBHandler}
                clean={clean}
                endClean={endCleanHandler}
              />
              <td className={classes["invisible-cell"]}></td>
              <Cell
                sol={props.sol[3]}
                checkPuzzleResolution={props.checkPuzzleResolution}
                endPuzzleResolution={props.endPuzzleResolution}
                onSaveValue={valueDHandler}
                clean={clean}
                endClean={endCleanHandler}
              />
              <td className={classes["invisible-cell"]}></td>
              <Cell
                sol={props.sol[6]}
                checkPuzzleResolution={props.checkPuzzleResolution}
                endPuzzleResolution={props.endPuzzleResolution}
                onSaveValue={valueGHandler}
                clean={clean}
                endClean={endCleanHandler}
              />
              <td className={classes["invisible-cell"]}></td>
              <Cell
                sol={props.sol[8]}
                checkPuzzleResolution={props.checkPuzzleResolution}
                endPuzzleResolution={props.endPuzzleResolution}
                onSaveValue={valueIHandler}
                clean={clean}
                endClean={endCleanHandler}
              />
            </tr>
            <tr>
              <td className={classes["default-cell"]}>:</td>
              <Cell
                sol={props.sol[2]}
                checkPuzzleResolution={props.checkPuzzleResolution}
                endPuzzleResolution={props.endPuzzleResolution}
                onSaveValue={valueCHandler}
                clean={clean}
                endClean={endCleanHandler}
              />
              <td className={classes["default-cell"]}>+</td>
              <td className={classes["invisible-cell"]}></td>
              <td className={classes["default-cell"]}>x</td>
              <Cell
                sol={props.sol[7]}
                checkPuzzleResolution={props.checkPuzzleResolution}
                endPuzzleResolution={props.endPuzzleResolution}
                onSaveValue={valueHHandler}
                clean={clean}
                endClean={endCleanHandler}
              />
              <td className={classes["default-cell"]}>:</td>
            </tr>
          </tbody>
        </table>
        <div className={classes.align}>
          {/* Bouton de demande d'envoit à la base de donnée (requete PUT) */}
          <Button type="submit" className={classes.button}>
            Valider
          </Button>
          {/* Bouton de demande de nettoyage du tableau : vider */}
          <Button onClick={cleanBoardHandler} className={classes.button}>
            Réinitialiser
          </Button>
        </div>
      </form>
    </>
  );
};

export default Board;
