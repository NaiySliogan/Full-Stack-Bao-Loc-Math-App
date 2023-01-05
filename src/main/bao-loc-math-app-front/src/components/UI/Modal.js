import ReactDOM from "react-dom";
import Button from "../UI/Button";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <>
      {!props.validation ? (
        <div className={classes.backdrop} onClick={props.onExit} />
      ) : (
        <div className={classes.backdrop} />
      )}
    </>
  );
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>{props.message}</div>
      <footer className={classes.actions}>
        {props.validation ? (
          <>
            <Button className={classes.button} onClick={props.onAccept}>
              Valider
            </Button>
            <Button className={classes.button2} onClick={props.onRefuse}>
              Annuler
            </Button>
          </>
        ) : (
          <Button className={classes.button} onClick={props.onExit}>
            OK
          </Button>
        )}
      </footer>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onExit={props.onExit} validation={props.validation} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          validation={props.validation}
          title={props.title}
          message={props.message}
          onExit={props.onExit}
          onAccept={props.onAccept}
          onRefuse={props.onRefuse}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default Modal;
