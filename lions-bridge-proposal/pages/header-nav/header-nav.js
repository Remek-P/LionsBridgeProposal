import HeaderNavCollapsed from "@/pages/header-nav/header-nav-collapsed/header-nav-collapsed";
import classes from "./header-nav.module.scss";

function HeaderNav() {
  return (
        <button type="button" className={classes.headerNav}>
          <span className="visually-hidden">menu</span>
          <HeaderNavCollapsed />
        </button>
  );
}

export default HeaderNav;