import classes from "./selected.module.scss";

function Selected({ el }) {
  return (
      <div id={el?.input}
           className={classes.gridFormPartial2Selected}
           data-inputoption={el?.checkbox}
      >{el?.input}</div>
  );
}

export default Selected;