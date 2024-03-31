import classes from "./header-nav.module.scss";

function HeaderNav() {
  return (
        <button type="button" className={classes.headerNav}>
          <span className="visually-hidden">menu</span>
        </button>
  );
}

export default HeaderNav;