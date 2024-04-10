import {useRef, useState} from "react";

import GridItemSurveyPartial1 from "@/pages/components/grid/grid-item/grid-item-survey/form/partial1/grid-item-survey-partial1";
import GridItemSurveyPartial2 from "@/pages/components/grid/grid-item/grid-item-survey/form/partial2/grid-item-survey-partial2";
import classes from "./grid-item-survey-form.module.scss";

function GridItemSurveyForm({ partial, setPartial, count }) {

  const input1 = " Sell my home";
  const input2 = " Buy a home";
  const input3 = " Save for a down payment";
  const input4 = " Invest in real estate";

  const inputArray = [
    {input: input1, checkbox: "A", checked: false},
    {input: input2, checkbox: "B", checked: true},
    {input: input3, checkbox: "C", checked: true},
    {input: input4, checkbox: "D", checked: false},
  ];

  const [ selected, setSelected ] = useState(inputArray);
  const mailInput = useRef("");

  const checkMailInput = () => {
    const trimMail = mailInput.current.value.trim();
    const checkEmailRegEx = /^\S+@\S+\.\S+$/.test(trimMail)

  }

  const onSubmit = (event) => {
    event.preventDefault();
    const timeStamp = new Date;
    setSelected([...selected, {timestamp: timeStamp}, {email: mailInput.current.value} ]);
    console.log("survey", selected);
    setPartial(prevState => prevState + 1);
  }

  const displayFormStep = () => {
    if (partial === 1) return <GridItemSurveyPartial1 count={count} selected={selected} setSelected={setSelected} setPartial={setPartial} />
    if (partial === 2) return <GridItemSurveyPartial2 count={count} selected={selected} mailInput={mailInput} />
  }
  console.log("Form")
  return (
        <form onSubmit={onSubmit}
              className={classes.gridFormContainer}
        >
          <legend className={classes.gridFormLegend}>
            What are your real estate goals?
          </legend>

          {
            displayFormStep()
          }

        </form>
  );
}

export default GridItemSurveyForm;