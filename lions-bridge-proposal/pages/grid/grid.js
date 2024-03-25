import GridItemPicture from "@/pages/grid/grid-item/grid-item-picture/grid-item-picture";
import GridItemSurvey from "@/pages/grid/grid-item/grid-item-survey/grid-item-survey";

import classes from "./grid.module.scss";
import GridItemText from "@/pages/grid/grid-item/grid-item-text/grid-item-text";

function Grid() {

      const path = "/assets/grid-item/";



  return (
      <ul className={classes.grid}>
        <GridItemPicture id="gridItem1" key={1} isPriority={true} path={`${path}logo.jpg`} alt="The right partner" />
        <GridItemPicture id="gridItem2" key={2} path={`${path}CEO.jpg`} alt="" />
        <GridItemPicture id="gridItem3" key={3} path={`${path}office_light.jpg`} alt="" />
        <GridItemPicture id="gridItem4" key={4} isPriority={true} path={`${path}office_mood.jpg`} alt="" />
        <GridItemText id="gridItem5" key={5} textItem="#real estate" alt="#real estate" />
        <GridItemPicture id="gridItem6" key={6} path={`${path}car.jpg`} alt="" />
        <GridItemPicture id="gridItem7" key={7} path={`${path}home_mood.jpg`} alt="" />
        <GridItemText id="gridItem8" key={8} textItem="#people centric" alt="#people centric" />
        <GridItemPicture id="gridItem9" key={9} path={`${path}laptop.jpg`} />
        <GridItemText id="gridItem10" key={10} textItem="#invest" alt="#invest" />
        <GridItemPicture id="gridItem11" key={11} path={`${path}house_on_a_hill.jpg`} alt="" />
        <GridItemPicture id="gridItem12" key={12} path={`${path}drone.jpg`} alt="" />
        <GridItemPicture id="gridItem13" key={13} path={`${path}signing.jpg`} alt="" />
        <GridItemPicture id="gridItem14" key={14} path={`${path}couple.jpg`} alt="" />
        <GridItemPicture id="gridItem15" key={15} path={`${path}office_sunset.jpg`} alt="" />
        <GridItemText id="gridItem16" key={16} textItem="#technology" alt="#technology" />
        <GridItemPicture id="gridItem17" key={17} path={`${path}ledger.jpg`} alt="" />
        <GridItemPicture id="gridItem18" key={18} path={`${path}bridge.jpg`} alt="" />
        <GridItemPicture id="gridItem19" key={19} path={`${path}house_night.jpg`} alt="" />
        <GridItemText id="gridItem20" key={20} textItem="#deal done" alt="#deal Done" />
        <GridItemPicture id="gridItem21" key={21} path={`${path}partnership.jpg`} alt="" />
            <GridItemSurvey id="gridItem22" key={22} />
      </ul>
  );
}

export default Grid;