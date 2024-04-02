import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const eventListener = () => document.addEventListener('keydown', handleEscape);

    if (isOpen) eventListener();

    return () => eventListener();
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
      <>
        {children}
      </>,
      document.getElementById("modal")
  );
};

export default Modal;