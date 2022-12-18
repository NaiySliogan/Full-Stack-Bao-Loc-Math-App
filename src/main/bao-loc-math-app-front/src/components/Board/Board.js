// import { useRef } from "react";

// import Cell from "./Cell";

import classes from "./Board.module.css";
import Cell from "./Cell";



const Board = (props) => {
 
  return (
    <form className={classes.board}>
      <table>
        <tbody>
          <tr>
            <Cell sol ={props.sol[0]} checkSubmit={props.checkSubmit}></Cell>
            <td className={classes["invisible-cell"]}></td>
            <Cell sol ={props.sol[4]} checkSubmit={props.checkSubmit}/>
            <td className={classes["default-cell"]}>-</td>
            <Cell sol ={props.sol[5]} checkSubmit={props.checkSubmit}/>
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
            <Cell sol ={props.sol[1]} checkSubmit={props.checkSubmit}/>
            <td className={classes["invisible-cell"]}></td>
            <Cell sol ={props.sol[3]} checkSubmit={props.checkSubmit}/>
            <td className={classes["invisible-cell"]}></td>
            <Cell sol ={props.sol[6]} checkSubmit={props.checkSubmit}/>
            <td className={classes["invisible-cell"]}></td>
            <Cell sol ={props.sol[8]} checkSubmit={props.checkSubmit}/>
          </tr>
          <tr>
            <td className={classes["default-cell"]}>:</td>
            <Cell sol ={props.sol[2]} checkSubmit={props.checkSubmit}/>
            <td className={classes["default-cell"]}>+</td>
            <td className={classes["invisible-cell"]}></td>
            <td className={classes["default-cell"]}>x</td>
            <Cell sol ={props.sol[7]} checkSubmit={props.checkSubmit}/>
            <td className={classes["default-cell"]}>:</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Board;
