import Selected
  from "@/pages/components/grid/grid-item/grid-item-survey/form/partial2/selected-options/selected/selected";

function SelectedOptions({ selected }) {

  console.log("SelectedOptions")

  return (
      <>
        {
          selected?.map(el => el.checked === true
              ? <Selected key={el.input} el={el} />
              : null
          )
        }
      </>
  );
}

export default SelectedOptions;