import classes
  from "@/pages/components/grid/grid-item/grid-item-survey/form/partial1/grid-item-survey-partial1.module.scss";

function Selection({
                     el,
                     required,
                     tabIndex,
                     setSelected,
                     selected
}) {

  const handleChange = (event) => {
    setSelected(
        selected.map((el) => {
          if (el?.input === event.target.id) {
            if (!el?.checked) return {...el, checked: true}
            if (el?.checked) return {...el, checked: false}
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

  return (
      <div className={classes.gridFormPartial1InputContainer}>
        <input type="checkbox"
               value={el?.input}
               id={el?.checkbox}
               aria-selected={el?.checked}
               name="grid-survey"
               className="visually-hidden"
               required={required}

        />
        <label htmlFor={el?.checkbox}
               id={el?.input}
               className={classes.gridFormPartial1Label}
               data-inputoption={el?.checkbox}
               tabIndex={tabIndex}
               onKeyDown={simulateEnter}
               onClick={handleChange}
        >{el?.input}</label>
      </div>
  );
}

export default Selection;