import { useState, useRef, useEffect } from "react";
import classes from "./Cell.module.css";

const Cell = (props) => {
  const refInput = useRef();
  const [number, setNumber] = useState();

  const handleChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    setNumber(value);
  };


  return (
    <td className={`${classes.cell} ${props.className}`}>
      {/* <label htmlFor={props.input.id}>{props.label}</label> */}
      <input
        ref={refInput}
        value={
          document.activeElement === refInput.current
            ? number || ""
            : props.checkSubmit === true
            ? props.sol
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
