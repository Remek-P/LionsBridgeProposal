import classes
  from "@/pages/components/grid/grid-item/grid-item-survey/form/partial1/grid-item-survey-partial1.module.scss";

function GridItemSurveyPartial2({ selected, setSelected }) {
  return (
      <div className={classes.gridFormPartial1InputContainer}>
        {
          selected?.map(el => el.checked === true
              ?  <div key={el.input}
                      id={el.input}
                      className={classes.gridFormPartial1Label}
                      data-inputoption={el.checkbox}
              >{el.input}</div>
              : null
          )
        }
      </div>
  );
}

export default GridItemSurveyPartial2;