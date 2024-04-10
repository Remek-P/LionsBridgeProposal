import classes from "./grid-item-survey-partial1.module.scss";
import Button from "@/pages/components/button/button";
import Selection from "@/pages/components/grid/grid-item/grid-item-survey/form/partial1/selection/selection";

function GridItemSurveyPartial1({
                                  count,
                                  selected,
                                  setPartial,
                                  setSelected

}) {

  const tabIndex = count ? -1 : 0;
  console.log("GridItemSurveyPartial1")
  return (
      <>
        {
          selected?.map(
              el => <Selection key={el.checkbox}
                               el={el}
                               tabIndex={tabIndex}
                               selected={selected}
                               setSelected={setSelected}
                               required={!selected.find(el => el.checked === true)} />
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