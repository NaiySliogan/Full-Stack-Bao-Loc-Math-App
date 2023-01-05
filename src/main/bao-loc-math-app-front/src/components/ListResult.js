import React, { useState } from "react";
import Modal from "./UI/Modal";
import Result from "./Result";
import classes from "./ListResult.module.css";

const ListResult = (props) => {
  const [askValidation, setAskValidation] = useState(); //Condition d'apparition du popup et message du popup
  const [deleteAll, setDeleteAll] = useState(false);
  const [listIsClosed, setListIsClosed] = useState(false);

  const deleteAllHandler = () => {
    setAskValidation({
      //Appel un popup si le résultat est différent de 66.
      title: "Demande de suppression",
      message: (
        <>
          <span> Voulez-vous supprimer toute la liste des resultats ? </span>
        </>
      ),
    });
  };
  const endDeleteAllHandler = () => {
    setDeleteAll(false);
    setAskValidation(null);
  };

  const acceptValidationHandler = () => {
    setAskValidation(null);
    setDeleteAll(true);
    props.checkDeleteRequest();
  };
  const refuseValidationHandler = () => {
    setAskValidation(null);
    setDeleteAll(false);
  };

  const closeListHandler = () => {
    setListIsClosed(true);
  };

  const openListHandler = () => {
    setListIsClosed(false);
  };

  let content = <p>Liste des résultats</p>;
  if (props.error) {
    content = <p>{props.error}</p>;
  } else if (props.loading) {
    content = <p>Chargement...</p>;
  } else if (props.listResult.length === 0) {
    content = <p>Aucunes solutions trouvées.</p>;
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
      {listIsClosed ? (
        <div className={classes["result-list"] } onClick={openListHandler}><div className={classes.entete}>
          <p className={classes.list} onClick={openListHandler}>
            -
          </p>
          <p className={classes.closed}>Liste des Résultats réduite</p>
          <p className={classes.list} onClick={openListHandler}>
            -
          </p>
          </div>
        </div>
      ) : (
        <ul className={classes["result-list"]}>
          {props.listResult.map((result) => (
            <Result
              key={result.id + result.dateEnregistrement}
              id={result.id}
              solution={result.solution}
              dateEnregistrement={result.dateEnregistrement}
              dureeExecution={result.dureeExecution}
              checkDeleteRequest={props.checkDeleteRequest}
              onDeleteAll={deleteAll}
              endDeleteAll={endDeleteAllHandler}
            />
          ))}
          <div className={classes.entete}>
            <p className={classes["tout-supprimer"]} onClick={deleteAllHandler}>
              Tout supprimer
            </p>
            <div className={classes.title}>{content} </div>
            <p className={classes.list} onClick={closeListHandler}>
              +
            </p>
          </div>
        </ul>
      )}
    </>
  );
};

export default ListResult;
