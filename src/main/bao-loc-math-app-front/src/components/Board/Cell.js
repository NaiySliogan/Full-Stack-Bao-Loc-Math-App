import { useState, useRef, useEffect } from "react";
import classes from "./Cell.module.css";

const Cell = (props) => {
  const refInput = useRef();
  const [number, setNumber] = useState();

  const handleChange = (event) => {
    props.endClean();
    console.log("change Handler");
    props.endPuzzleResolution();
    const value = parseInt(event.target.value.replace(/\D/g, ""));
    setNumber(value);
    props.onSaveValue(value);
  };

  //   const endClean = props.endClean;
  //   const checkPuzzleResolution=props.checkPuzzleResolution;
  useEffect(() => {
    // console.log("use effect");
    if (props.checkPuzzleResolution === true) {
      setNumber("");
      console.log("solution path");
      props.onSaveValue(props.sol);
      props.endPuzzleResolution();
    } else if (props.clean === true) {
      console.log("clean path");
      setNumber("");
      props.onSaveValue("");
      // props.endClean();
    } else if (number !== "" && number >= 0 && number <= 9) {
      console.log("number path");
      props.onSaveValue(number);
      // setNumber("");
    } else {
      console.log("error path");
      // props.onSaveValue("");
    }
  }, [props, number]);

  // useEffect(() => {
  //   if (props.clean === true) {
  //     setNumber("");
  //     props.onSaveValue("");
  //     console.log("clean use effect true");
  //     props.endClean();
  //   } else if (number !== "" && number >= 0 && number <= 9) {
  //     console.log("number path");
  //     props.onSaveValue(number);
  //   } else if (props.sol >= 0 && props.sol <= 9) {
  //     console.log("solution path");
  //     props.onSaveValue(props.sol);
  //   }
  // }, [number, props]);

  return (
    <td className={`${classes.cell} ${props.className}`}>
      {/* <label htmlFor={props.input.id}>{props.label}</label> */}
      <input
        ref={refInput}
        // value={
        //   document.activeElement === refInput.current
        //     ? number || ""
        //     : number !== "" && number >= 0 && number <= 9
        //     ? number || ""
        //     : props.checkPuzzleResolution === true
        //     ? props.sol
        //     : number || ""
        // }
        value={
          document.activeElement === refInput.current
            ? number || ""
            : number !== "" && number >= 0 && number <= 9
            ? number || ""
            : props.sol !== ""
            ? props.sol || ""
            : number || ""
        }
        onClick={handleChange}
        onChange={handleChange}
        type="text"
        // pattern="[1-9]"
        // ref={ref}
        // id={"amount_" + props.id}

        // min={1}
        // max={9}
        // step="1"
        maxLength={1}
        // defaultValue= "1"
      />
    </td>
  );
};

export default Cell;
