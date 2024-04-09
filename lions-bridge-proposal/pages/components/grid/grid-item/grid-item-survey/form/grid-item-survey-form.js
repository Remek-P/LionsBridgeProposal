import { useState } from "react";

import GridItemSurveyPartial1
  from "@/pages/components/grid/grid-item/grid-item-survey/form/partial1/grid-item-survey-partial1";
import GridItemSurveyPartial2
  from "@/pages/components/grid/grid-item/grid-item-survey/form/partial2/grid-item-survey-partial2";
import classes
  from "@/pages/components/grid/grid-item/grid-item-survey/form/partial1/grid-item-survey-partial1.module.scss";

function GridItemSurveyForm({ partial, setPartial, count }) {

  const input1 = " Sell my home";
  const input2 = " Buy a home";
  const input3 = " Save for a down payment";
  const input4 = " Invest in real estate";

  const inputArray = [
    {input: input1, checkbox: "A", checked: false},
    {input: input2, checkbox: "B", checked: false},
    {input: input3, checkbox: "C", checked: false},
    {input: input4, checkbox: "D", checked: false},
  ];

  const [ selected, setSelected ] = useState(inputArray);

  const onSubmit = (event) => {
    event.preventDefault();
    const timeStamp = new Date;
    setSelected([...selected, {timestamp: timeStamp}]);
    console.log(selected)
    setPartial(prevState => prevState + 1)
  }

  const displayFormStep = () => {
    if (partial === 1) return <GridItemSurveyPartial1 count={count} selected={selected} setSelected={setSelected} />
    if (partial === 2) return <GridItemSurveyPartial2 selected={selected} setSelected={setSelected} />
  }

  return (
        <form onSubmit={onSubmit}
              className={classes.gridFormPartial1Container}
        >
          <legend className={classes.gridFormPartial1Legend}>
            What are your real estate goals?
          </legend>

          {
            displayFormStep()
          }

        </form>
  );
}

export default GridItemSurveyForm;