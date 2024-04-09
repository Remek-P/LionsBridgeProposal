import classes from "./grid-item-survey-partial1.module.scss";
import Button from "@/pages/components/button/button";

function GridItemSurveyPartial1({
                                  count,
                                  selected,
                                  setPartial,
                                  setSelected

}) {
  const handleChange = (event) => {
    setSelected(
        selected.map((el) => {
          if (el.input === event.target.id) {
            if (!el.checked) return {...el, checked: true}
            if (el.checked) return {...el, checked: false}
          } else {
            return el
          }
        })
    )
  }

  const simulateEnter = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      event.target.click();
    }
  }
  const tabIndex = count ? -1 : 0;
  console.log(selected)
  return (
      <>
        {
          selected?.map(el =>
            <div key={el.checkbox} className={classes.gridFormPartial1InputContainer}>
              <input type="checkbox"
                     value={el.input}
                     id={el.checkbox}
                     aria-selected={el.checked}
                     name="grid-survey"
                     className="visually-hidden"
                     required={!selected.find(el => el.checked === true)}

              />
              <label htmlFor={el.checkbox}
                     id={el.input}
                     className={classes.gridFormPartial1Label}
                     data-inputoption={el.checkbox}
                     tabIndex={tabIndex}
                     onKeyDown={simulateEnter}
                     onClick={handleChange}
              >{el.input}</label>
            </div>
        )
        }

        <Button className={classes.gridFormPartial1Button}
                tabIndex={tabIndex}
                type="button"
                text="Next"
                onClick={() => setPartial(prevState => prevState + 1)}
        />
      </>
  );
}

export default GridItemSurveyPartial1;