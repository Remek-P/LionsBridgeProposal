import SelectedOptions from "@/pages/components/grid/grid-item/grid-item-survey/form/partial2/selected-options/selected-options";
import MailInput from "@/pages/components/grid/grid-item/grid-item-survey/form/partial2/mail-input/mail-input";

function GridItemSurveyPartial2({ selected, count, mailInput }) {

  console.log("GridItemSurveyPartial2")
  return (
      <>
        <SelectedOptions selected={selected} />
        <MailInput count={count} mailInput={mailInput} />
      </>
  );
}

export default GridItemSurveyPartial2;