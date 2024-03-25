import classes from "./grid-item-text.module.scss";

import Modal from "@/pages/modal/modal";

function GridItemText({ id, textItem }) {

  return (
        <li id={id} className={classes.gridItemText}>
          <span>{textItem}</span>
          <Modal />
        </li>
    )
}

export default GridItemText;