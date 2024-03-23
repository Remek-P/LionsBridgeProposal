
import Logo from "@/pages/header/logo/logo";

import classes from "./header.module.scss";
import HeaderNav from "@/pages/header-nav/header-nav";

function Header() {
  return (
      <div className={classes.header} >
        <Logo />
        <HeaderNav />
      </div>
  );
}

export default Header;