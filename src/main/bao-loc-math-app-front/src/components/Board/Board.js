import { useState, useEffect } from "react";
import classes from "./Board.module.css";
import Cell from "./Cell";
import Button from "../UI/Button";

const Board = (props) => {
  const [valueA, setValueA] = useState();
  const [valueB, setValueB] = useState();
  const [valueC, setValueC] = useState();
  const [valueD, setValueD] = useState();
  const [valueE, setValueE] = useState();
  const [valueF, setValueF] = useState();
  const [valueG, setValueG] = useState();
  const [valueH, setValueH] = useState();
  const [valueI, setValueI] = useState();
  // const [solution, setSolution] =useState([]);
  const [clean, setClean] = useState(false);

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
    props.onSaveSolution(solution);
  };

  const cleanBoardHandler = () => {
    setClean(true);
    // props.onCleaning();
    console.log("clean true");
    props.endPuzzleResolution();
    props.setSol(["","","","","","","","",""]);
  };
  const endCleanHandler = (event) => {
    setClean(false);
    console.log("clean false");
  };
  useEffect(()=>{
    setClean(false);
  },[props])

  return (
    <form onSubmit={submitHandler} className={classes.board}>
      <table>
        <tbody>
          <tr>
            <Cell
              sol={props.sol[0]}
              checkPuzzleResolution={props.checkPuzzleResolution}
              endPuzzleResolution={props.endPuzzleResolution}
              onSaveValue={valueAHandler}
              clean={clean}
              endClean={endCleanHandler}
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
        <Button type="submit" className={classes.button}>
          Valider solution
        </Button>
        <Button onClick={cleanBoardHandler} className={classes.button}>
          Nettoyer plateau
        </Button>
      </div>
    </form>
  );
};

export default Board;
