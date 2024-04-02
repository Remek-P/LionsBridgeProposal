import classes from "./header-nav-collapsed.module.scss";

function HeaderNavCollapsed() {
  return (
        <svg className={classes.collapsed} viewBox="0 0 4 18" xmlns="http://www.w3.org/2000/svg">
          <circle cx="1.84519" cy="1.84519" r="1.84519" transform="matrix(-1 0 0 1 3.69043 0)" />
          <circle cx="1.84519" cy="1.84519" r="1.84519" transform="matrix(-1 0 0 1 3.69043 7.15479)" />
          <circle cx="1.84519" cy="1.84519" r="1.84519" transform="matrix(-1 0 0 1 3.69043 14.3096)" />
        </svg>
  );
}

export default HeaderNavCollapsed;