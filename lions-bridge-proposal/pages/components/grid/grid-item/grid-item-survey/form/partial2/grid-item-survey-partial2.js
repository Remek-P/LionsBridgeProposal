import classes from "@/pages/components/grid/grid-item/grid-item-survey/form/partial2/grid-item-survey-partial2.module.scss";
import Button from "@/pages/components/button/button";

function GridItemSurveyPartial2({ selected, count, mailInput }) {

  const svg = <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5625" />
    <path
        d="M35.5906 12.546C35.5508 12.6325 35.4961 12.7114 35.4289 12.7789L20.1418 28.0627L24.4592 35.2599C24.5357 35.3879 24.6461 35.4923 24.7782 35.5615C24.9102 35.6306 25.0589 35.6619 25.2077 35.6519C25.3564 35.6418 25.4995 35.5909 25.6211 35.5046C25.7427 35.4183 25.8381 35.3 25.8967 35.1629L35.5906 12.546ZM19.0002 26.9211L11.803 22.6005C11.675 22.524 11.5706 22.4136 11.5014 22.2815C11.4323 22.1494 11.401 22.0008 11.411 21.852C11.4211 21.7032 11.472 21.5601 11.5583 21.4385C11.6446 21.3169 11.7629 21.2216 11.9 21.163L34.5217 11.4707C34.4339 11.5106 34.354 11.5659 34.2857 11.634L19.0002 26.9211Z"
    />
  </svg>

  const tabIndex = count ? -1 : 0;
  const handleBlur = (event) => {
    if (event.target.validity.patternMismatch) {
      style(true)
      console.log(true)
    } else {
      style(false)
      console.log(true)
    }
  };

  function style(isError) {
    if (isError) {
      return {
        color: "rgba(255, 0, 0, 1)"
      };
    } else {
      return {
        color: "inherit"
      }
    }
  }

  console.log("GridItemSurveyPartial2")
  return (
      <>
        {
          selected?.map(el => el.checked === true
              ? <div key={el.input}
                     id={el.input}
                     className={classes.gridFormPartial2Selected}
                     data-inputoption={el.checkbox}
              >{el.input}</div>
              : null
          )
        }
        <div className={classes.gridFormPartial2MailContainer}>
          <label htmlFor="mail" className={classes.gridFormPartial2Label}>Share your email address.</label>
          <div className={classes.gridFormPartial2InputContainer}>
            <input type="text"
                   id="email"
                   tabIndex={tabIndex}
                   pattern="^\S+@\S+\.\S+$"
                   onBlur={handleBlur}
                   placeholder="Your email address"
                   className={classes.gridFormPartial2Input}
                   ref={mailInput}
                   required />
            <Button className={classes.gridFormPartial2Button} type="submit" text={svg} tabIndex={tabIndex}/>
          </div>
        </div>
      </>
  );
}

export default GridItemSurveyPartial2;