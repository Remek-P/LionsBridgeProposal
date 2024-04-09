import { useState } from "react";

import GridItemSurveyHeader from "@/pages/components/grid/grid-item/grid-item-survey/header/grid-item-survey-header";
import GridItemSurveyForm from "@/pages/components/grid/grid-item/grid-item-survey/form/grid-item-survey-form";

import classes from "./grid-item-survey.module.scss";

function GridItemSurvey({ id, count }) {

  const [ partial, setPartial ] = useState(1);


  return (
      <li id={id} className={classes.gridForm}>
        <GridItemSurveyHeader partial={partial} />
        <GridItemSurveyForm count={count} partial={partial} setPartial={setPartial} />
      </li>
  );
}

export default GridItemSurvey;