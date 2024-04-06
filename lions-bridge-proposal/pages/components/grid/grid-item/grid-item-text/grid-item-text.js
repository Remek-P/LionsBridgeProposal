import {useRef, useState} from "react";

import Modal from "@/pages/components/modal/modal";

import classes from "./grid-item-text.module.scss";

function GridItemText({ id,
                        textItem,
                        mainText = "test",
                        count,
                        setCount }) {

  const [isOpen, setIsOpen] = useState(false);

  const focus = useRef(null)

  const openModal = () => {
    setIsOpen(true);
    setCount(prevState => prevState + 1);
    console.log("openModal", count)
  }

  const closeModal = () => {
    setIsOpen(false);
    setCount(0);
    console.log("closeModal",count)
    focus.current.focus()
  };

  const simulateEnter = (event) => {
    if (count === 0 && (event.keyCode === 13 || event.which === 13)) {
      console.log("simulateEnter", count)
      openModal();
    }
  }



  const test = <>
    <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that
      doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler
      text can be very useful when the focus is meant to be on design, not content.</p>

    <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer
      sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all
      around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the
      authoritative history of lorem ipsum.</p>

    <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer
      sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all
      around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the
      authoritative history of lorem ipsum.</p>

    <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer
      sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all
      around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the
      authoritative history of lorem ipsum.</p>
  </>

  // TODO: move mainText text to proper component

  const svg = <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M31 1L1 31" />
    <path d="M0.999999 1L31 31" />
  </svg>


  const popUp = <div className={classes.gridItemModal} >
    <h3 className={classes.gridItemModalHeader} >{textItem}</h3>
    <div className={classes.gridItemModalContainer} >
      {test}
    </div>
    <button type="button"
            className={classes.gridItemModalClose}
            onClick={closeModal}
            tabIndex="0"
    >{svg}</button>
  </div>

  return (
      <li id={id}
          className={classes.gridItemText}
          onClickCapture={openModal}
          onKeyDown={simulateEnter}
          tabIndex={count !== 0 ? -1 : 0}
          role="button"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label={textItem}
          ref={focus}
      >
        <span>{ textItem }</span>
        {
          isOpen
              ? <Modal isOpen={isOpen} onClose={closeModal}>{popUp}</Modal>
              : null
        }
      </li>
  )
}

export default GridItemText;