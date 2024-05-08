import classes from "./Modal.module.css";

// children prop can be drilled into without using props with {}.
// children is a reserved prop.
// open is a reserved prop as well and will evaluate to true by default.
function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}>
        <dialog open className={classes.modal}>
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
