import { useState} from "react";
import classes from "./Result.module.css";
import DeleteResult from "./DeleteResult";

const Result = (props) => {
  const [deleteRequest, setDeleteRequest] = useState(false); // true : Request DELETE en cours

  const endDeleteRequestHandler = () => {
    setDeleteRequest(false);
    props.endDeleteAll();
  };
 
  const onClickHandler = () => {
    setDeleteRequest(true);
    props.checkDeleteRequest();
  };


  const solutionPrintHandler = (sol) => {
    if (sol) {
      const a = parseInt(props.solution.substr(0, 1));
      const b = parseInt(props.solution.substr(1, 1));
      const c = parseInt(props.solution.substr(2, 1));
      const d = parseInt(props.solution.substr(3, 1));
      const e = parseInt(props.solution.substr(4, 1));
      const f = parseInt(props.solution.substr(5, 1));
      const g = parseInt(props.solution.substr(6, 1));
      const h = parseInt(props.solution.substr(7, 1));
      const i = parseInt(props.solution.substr(8, 1));
      const result = a + (13 * b) / c + d + 12 * e - f - 11 + (g * h) / i - 10;
      let resultPrint = <span className={classes.ok}>66</span>;
      if (result !== 66) {
        resultPrint = (
          <span className={classes.error}>{result.toFixed(2)}</span>
        );
      }

      return (
        <p>
          Solution : <span>{a}</span> + (13 * <span>{b}</span> /{" "}
          <span>{c}</span>) + <span>{d}</span> + (12 * <span>{e}</span>) -{" "}
          <span>{f}</span> - 11 + (<span>{g}</span> * <span>{h}</span> /{" "}
          <span>{i}</span>) - 10 = {resultPrint}
        </p>
      );
    } else {
      return <></>;
    }
  };

  const solution = solutionPrintHandler(props.solution);
  return (
    <>
      {(deleteRequest || props.onDeleteAll) && (
        <DeleteResult
          solution={{
            id: props.id,
            solution: props.solution,
            dateEnregistrement: props.dateEnregistrement,
            dureeExecution: props.dureeExecution,
          }}
          onValidation={endDeleteRequestHandler}
        />
      )}
      <li className={classes.separate}>
        <div className={classes.result}>
          <p className={classes.id}> {props.id}</p>
          <div className={classes["sub-result"]}>
            <div className={classes.solution}>{solution}</div>
            {/* <p className={classes.date}>
            Date d'execution : <br />
            {new Date(props.dateEnregistrement).toString("dd-MM-YYYY")}
          </p> */}
            <p className={classes.vitesse}>
              Vitesse d'éxécution : {props.dureeExecution || 0} ms
            </p>
          </div>
        </div>
        <div className={classes.supprimer} onClick={onClickHandler}>
          X Supprimer
        </div>
      </li>
    </>
  );
};

export default Result;
