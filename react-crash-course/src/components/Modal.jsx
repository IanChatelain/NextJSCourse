import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

// children prop can be drilled into without using props with {}.
// children is a reserved prop.
// open is a reserved prop as well and will evaluate to true by default.
function Modal({ children }) {
  const navigate = useNavigate();

  function closeHanlder() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHanlder} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
