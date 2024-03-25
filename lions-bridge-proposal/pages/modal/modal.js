import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Modal({ children, isOpen }) {

  const [ enabledDocument, setEnabledDocument ] = useState(false);

  useEffect(() => {
    setEnabledDocument(true);
  }, []);

  if (!isOpen) return null;

  return enabledDocument ?
      ReactDOM.createPortal(
          <div>
            {children}
          </div>,
          document.getElementById("modal")
      ) : null
}

export default Modal;