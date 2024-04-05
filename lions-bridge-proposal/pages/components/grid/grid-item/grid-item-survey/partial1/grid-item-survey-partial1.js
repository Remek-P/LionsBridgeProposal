import classes from "./grid-item-survey-partial1.module.scss";

function GridItemSurveyPartial1({ count, selected, setSelected }) {
  const handleChange = (event) => {
    setSelected(
        selected.map((el) => {
          if (el.input === event.target.id) {
            if (!el.checked) return {...el, checked: true}
            if (el.checked) return {...el, checked: false}
          } else {
            return el
          }
        })
    )
  }

  const simulateEnter = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      event.target.click();

    }
  }

  const chooseInput = () => {
    return selected.map(el =>
        <div key={el.checkbox} className={classes.gridFormPartial1InputContainer}>
          <input type="checkbox"
                 value={el.input}
                 id={el.checkbox}
                 aria-selected={el.checked}
                 name="grid-survey"
                 required
          />
          <label htmlFor={el.checkbox}
                 id={el.input}
                 className={classes.gridFormPartial1Label}
                 data-inputoption={el.checkbox}
                 tabIndex={count !== 0 ? -1 : 0}
                 onKeyDown={simulateEnter}
                 onClick={handleChange}
          >{el.input}</label>
        </div>
    )
  }

  const header = <svg viewBox="0 0 155 29" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M8.53078 28.2L10.6908 19.88H5.53078L3.37078 28.2H2.25078L4.41078 19.88H0.0507813V18.88H4.65078L7.09078 9.44H2.81078V8.44H7.33078L9.49078 0.119998H10.6108L8.45078 8.44H13.6108L15.7708 0.119998H16.8908L14.7308 8.44H19.0908V9.44H14.4908L12.0508 18.88H16.3308V19.88H11.8108L9.65078 28.2H8.53078ZM5.77078 18.88H10.9308L13.3708 9.44H8.21078L5.77078 18.88ZM25.9055 27.24C24.3055 27.24 23.1055 26.36 23.1055 24.2V4.96C23.1055 3.16 22.6255 2.52 20.5055 2.72V1.8L25.2255 0.799999C26.1455 0.599999 26.7055 1.04 26.7055 2V24.12C26.7055 25.52 27.5455 25.76 28.7055 25.52V26.08C28.2255 26.8 27.0255 27.24 25.9055 27.24ZM40.0395 27.24C35.0395 27.24 30.7195 23.76 30.7195 17.92C30.7195 11.92 35.1195 8.6 40.1595 8.6C44.2395 8.6 46.8795 10.8 46.8795 13.84C46.8795 16.64 44.6795 17.48 39.3195 17.72L35.7995 17.92C35.0395 17.96 34.7595 18.32 34.7595 19.2C34.7595 22.16 37.7195 24.92 41.7995 24.92C43.5195 24.92 45.4395 24.44 46.7995 22.68L47.5595 23.32C46.7995 24.72 44.3195 27.24 40.0395 27.24ZM34.5595 15.36C34.5595 16.68 34.9995 16.88 35.8795 16.84L38.5995 16.76C42.2395 16.64 43.2795 16 43.2795 13.88C43.2795 11.72 42.1595 9.8 39.4395 9.8C36.0795 9.8 34.5595 12.76 34.5595 15.36ZM56.782 27.2C53.902 27.2 51.982 25.72 51.982 22.32V11.56C51.982 10.48 51.662 10.24 51.062 10.24H49.182V9.32C51.542 8.48 52.902 7.2 54.102 5.08C54.262 4.8 54.462 4.72 54.742 4.72H55.142C55.422 4.72 55.622 4.92 55.622 5.2L55.582 7.92C55.582 8.72 55.862 8.96 57.662 8.96H60.662V10.48L57.662 10.32C55.862 10.24 55.582 10.56 55.582 11.64V21.88C55.582 24.24 55.982 25.72 57.942 25.72C58.862 25.72 59.582 25.4 60.102 24.92C60.622 25.36 60.582 25.8 60.382 25.96C59.622 26.68 58.462 27.2 56.782 27.2ZM64.148 9.32C65.068 8.52 65.708 7.36 65.708 6.72C65.708 6.28 65.468 6.04 65.068 6.04C63.788 6.04 62.868 5.12 62.868 3.8C62.868 2.4 63.948 1.52 65.268 1.52C66.988 1.52 67.828 2.96 67.828 4.64C67.828 6.76 66.508 8.8 64.748 9.96L64.148 9.32ZM75.5702 27.24C72.9302 27.24 70.7702 26.52 69.4902 25.44C68.5702 23.56 68.4502 21.24 69.8102 21.24C70.2502 21.24 70.5702 21.48 70.7702 22.08C71.7702 24.88 73.4102 26.12 76.0502 26.12C78.6102 26.12 79.8102 24.92 79.8102 23.24C79.8102 20.84 77.5302 20.28 75.0502 19.44C72.0502 18.44 69.1302 17 69.1302 13.76C69.1302 10.56 72.0102 8.6 76.1302 8.6C78.4502 8.6 80.4902 9.24 81.7702 10.16C82.6902 12.04 82.8102 14.32 81.4502 14.32C81.0102 14.32 80.7302 14.08 80.5302 13.52C79.5702 10.76 77.8902 9.64 75.6902 9.64C73.5702 9.64 72.4902 10.68 72.4902 12.36C72.4902 14.52 74.1702 15.36 76.4902 16.16C79.4102 17.16 83.3302 18.2 83.3302 21.84C83.3302 25.2 80.0102 27.24 75.5702 27.24ZM100.102 27.2C97.2223 27.2 95.3023 25.72 95.3023 22.32V11.56C95.3023 10.48 94.9823 10.24 94.3823 10.24H92.5023V9.32C94.8623 8.48 96.2223 7.2 97.4223 5.08C97.5823 4.8 97.7823 4.72 98.0623 4.72H98.4623C98.7423 4.72 98.9423 4.92 98.9423 5.2L98.9023 7.92C98.9023 8.72 99.1823 8.96 100.982 8.96H103.982V10.48L100.982 10.32C99.1823 10.24 98.9023 10.56 98.9023 11.64V21.88C98.9023 24.24 99.3023 25.72 101.262 25.72C102.182 25.72 102.902 25.4 103.422 24.92C103.942 25.36 103.902 25.8 103.702 25.96C102.942 26.68 101.782 27.2 100.102 27.2ZM111.388 27.24C108.708 27.24 106.188 25.96 106.188 22.84C106.188 19.72 108.668 17.44 117.348 16.4C118.068 16.32 118.428 16.08 118.428 15.2V14.4C118.428 11.52 117.188 9.72 114.348 9.72C109.468 9.72 112.908 14.84 109.228 14.84C107.948 14.84 107.348 14.04 107.348 12.88C107.348 9.84 111.508 8.6 115.428 8.6C120.148 8.6 122.028 10.6 122.028 15.36V24.12C122.028 25.52 122.788 25.72 123.788 25.36V25.88C123.388 26.68 122.388 27.24 121.308 27.24C119.668 27.24 118.508 26.24 118.428 24.36C118.428 23.96 118.108 23.96 117.828 24.32C116.428 26.04 114.028 27.24 111.388 27.24ZM109.988 22.08C109.988 23.72 111.068 25.2 113.428 25.2C116.148 25.2 118.428 23.2 118.428 20.48V18.84C118.428 17.92 118.148 17.4 116.828 17.56C111.228 18.16 109.988 20.24 109.988 22.08ZM130.202 27.24C128.602 27.24 127.402 26.36 127.402 24.2V4.96C127.402 3.16 126.922 2.52 124.802 2.72V1.8L129.522 0.799999C130.442 0.599999 131.002 1.04 131.002 2V24.12C131.002 25.52 131.842 25.76 133.002 25.52V26.08C132.522 26.8 131.322 27.24 130.202 27.24ZM134.652 26.04C136.532 25.88 137.212 25.36 137.212 23.84V4.96C137.212 3.16 136.732 2.52 134.612 2.72V1.8L139.332 0.799999C140.252 0.599999 140.812 1.04 140.812 2V16.28C140.812 17.12 141.332 17.44 141.892 16.92L147.812 11.64C148.612 10.92 148.212 10.08 146.212 9.88V8.96H153.252V9.88C151.372 10.08 150.812 10.72 149.572 11.8L145.412 15.44L151.612 24.12C152.772 25.72 153.332 25.84 154.932 26.04V27H146.852V26.04C148.332 25.84 148.412 25.44 147.652 24.36L143.892 19.08C143.332 18.36 143.012 18.16 142.452 18.16C141.532 18.16 140.812 19.2 140.812 20.92V23.84C140.812 25.36 141.492 25.88 143.372 26.04V27H134.652V26.04Z" />
  </svg>

  return (
      <>
        <h3 className={classes.gridFormPartial1Header}
            aria-label="#let's talk"
        >
          {header}
        </h3>
        <form onSubmit={null}
              className={classes.gridFormPartial1Container}
        >
          <legend className={classes.gridFormPartial1Legend}>
            What are your real estate goals?</legend>
          {
            chooseInput()
          }
          <button type="submit"
                  onSubmit={(e) => {e.preventDefault()}}
                  className={classes.gridFormPartial1Button}
                  tabIndex={count !== 0 ? -1 : 0}
          >
            Next</button>
        </form>
      </>
  );
}

export default GridItemSurveyPartial1;