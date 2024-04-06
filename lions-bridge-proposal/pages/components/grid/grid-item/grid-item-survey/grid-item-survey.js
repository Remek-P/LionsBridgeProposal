import {useState} from "react";
import classes from "./grid-item-survey.module.scss";
import GridItemSurveyPartial1
  from "@/pages/components/grid/grid-item/grid-item-survey/partial1/grid-item-survey-partial1";

function GridItemSurvey({ id, count }) {

  const [ partial, setPartial ] = useState(0);

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

  return (
      <li id={id} className={classes.gridForm}>
        {/*{partial === 0 && <GridItemSurveyPartial1 count={count}*/}
        {/*                                          selected={selected}*/}
        {/*                                          setSelected={setSelected}*/}
        {/*                                          partial={partial}*/}
        {/*                                          setPartial={setPartial}*/}
        {/*/>}*/}
      </li>
  );
}

export default GridItemSurvey;