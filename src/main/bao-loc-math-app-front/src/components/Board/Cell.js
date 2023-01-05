import { useState, useRef, useEffect } from "react";
import classes from "./Cell.module.css";

const Cell = (props) => {
  const refInput = useRef();
  const [number, setNumber] = useState();

  //S'active en cas d'interraction directe avec une cellule interactive
  const handleChange = (event) => {
    props.endClean();
    props.endPuzzleResolution();
    const value = parseInt(event.target.value.replace(/\D/g, "")); // Limite le type d'entrée du clavier possible
    setNumber(value);
    props.onSaveValue(value);
  };

  useEffect(() => {
    //Nécessaire pour remplir automatiquement le tableau en cas de demande de résolution du puzzleet pour le vider
    if (props.checkPuzzleResolution === true) {
      setNumber("");

      props.onSaveValue(props.sol);
      props.endPuzzleResolution();
    } else if (props.clean === true) {

      setNumber("");
      props.onSaveValue("");

    } else if (number !== "" && number >= 0 && number <= 9) {
  
      props.onSaveValue(number);
  
    } 
  }, [props, number]);


  return (
    <td className={`${classes.cell} ${props.className}`}>
   
      <input
        ref={refInput}
   
        value={
          document.activeElement === refInput.current
            ? number || ""
            : number !== "" && number >= 0 && number <= 9
            ? number || ""
            : props.sol !== ""
            ? props.sol || ""
            : number || ""
        } // Priorité des valeurs affichées dans les cellules
        // onClick={handleChange}
        onChange={handleChange}
        type="text"
        maxLength={1}
      />
    </td>
  );
};

export default Cell;
