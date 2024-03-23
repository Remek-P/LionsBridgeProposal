import GridItemPictureText from "@/pages/grid/grid-item/grid-item-picture/grid-item-picture-text";
import GridItemSurvey from "@/pages/grid/grid-item/grid-item-survey/grid-item-survey";

import classes from "./grid.module.scss";

function Grid() {

      const path = "/assets/grid-item/"

  return (
      <ul className={classes.grid}>
        <GridItemPictureText id="gridItem1" key={1} isPriority={true} path={`${path}logo.jpg`} alt="The right partner" />
        <GridItemPictureText id="gridItem2" key={2} path={`${path}CEO.jpg`} alt="" />
        <GridItemPictureText id="gridItem3" key={3} path={`${path}office_light.jpg`} alt="" />
        <GridItemPictureText id="gridItem4" key={4} path={`${path}office_mood.jpg`} alt="" />
        <GridItemPictureText id="gridItem5" key={5} textItem="#real estate" alt="#real estate" />
        <GridItemPictureText id="gridItem6" key={6} path={`${path}car.jpg`} alt="#technology" />
        <GridItemPictureText id="gridItem7" key={7} path={`${path}home_mood.jpg`} alt="" />
        <GridItemPictureText id="gridItem8" key={8} textItem="#people centric" alt="#people centric" />
        <GridItemPictureText id="gridItem9" key={9} path={`${path}laptop.jpg`} />
        <GridItemPictureText id="gridItem10"  key={10} textItem="#invest" alt="#invest" />
        <GridItemPictureText id="gridItem11"  key={11} path={`${path}house_on_a_hill.jpg`} alt="" />
        <GridItemPictureText id="gridItem12"  key={12} path={`${path}drone.jpg`} alt="" />
        <GridItemPictureText id="gridItem13"  key={13} path={`${path}signing.jpg`} alt="" />
        <GridItemPictureText id="gridItem14"  key={14} path={`${path}couple.jpg`} alt="" />
        <GridItemPictureText id="gridItem15"  key={15} path={`${path}office_sunset.jpg`} alt="" />
        <GridItemPictureText id="gridItem16"  key={16} textItem="#technology" alt="#technology" />
        <GridItemPictureText id="gridItem17"  key={17} path={`${path}ledger.jpg`} alt="" />
        <GridItemPictureText id="gridItem18"  key={18} path={`${path}bridge.jpg`} alt="" />
        <GridItemPictureText id="gridItem19"  key={19} path={`${path}house_night.jpg`} alt="" />
        <GridItemPictureText id="gridItem20"  key={20} textItem="#deal done" alt="#deal Done" />
        <GridItemPictureText id="gridItem21"  key={21} path={`${path}partnership.jpg`} alt="" />
            <GridItemSurvey id="gridItem22" key={22} />
      </ul>
  );
}

export default Grid;