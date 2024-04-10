import classes from "./thank-you.module.scss";

function ThankYou() {
  console.log("Thank you")
  return (
      <div>
        <svg width="146" height="115" viewBox="0 0 146 115" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50.7578 94.3805L0.966797 44.589L50.7578 114.177L145.034 0.104492L50.7578 94.3805Z" fill="white"/>
        </svg>
        <div className={classes.gridItemSurveyThankYouText}>We will get back to you soon.</div>

      </div>
  );
}

export default ThankYou;