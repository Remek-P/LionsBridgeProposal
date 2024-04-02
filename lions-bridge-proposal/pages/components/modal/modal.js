import { useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.scss";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClose = event => {
      if (event.target === document.getElementById("closePortal")) {
        onClose()
      }
    };

    const eventListener = () => {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClose);
    }

    if (isOpen) eventListener();

    return () => eventListener();
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
      <div id="closePortal" className={classes.overlay}>
        {children}
      </div>,
      document.getElementById("modal")
  );
};

export default Modal;