import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Modal({ children, isOpen, setIsOpen}) {

  const [ enabledDocument, setEnabledDocument ] = useState(false);

  useEffect(() => {
    setEnabledDocument(true);
  }, []);

  if (!isOpen) return null;

  return enabledDocument ?
      ReactDOM.createPortal(
          <>
            { children }
          </>,
          document.getElementById("modal")
      ) : null
}

export default Modal;