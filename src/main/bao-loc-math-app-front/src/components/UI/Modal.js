import ReactDOM from "react-dom";
import Card from "./Card";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </Card>
  );
};

const portalElement =  document.getElementById("overlays");

const Modal = (props) => {
  return(<>
      {ReactDOM.createPortal(
      <Backdrop onClose={props.onClose} />,
      portalElement) }
      {ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
  </>);
};

export default Modal;
