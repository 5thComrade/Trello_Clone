import React from "react";
import classes from "./Navbar.module.css";

const navbar = (props) => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.ToggleButton} onClick={props.sideDrawer}>
        <span className={classes.ToggleLine}></span>
        <span className={classes.ToggleLine}></span>
        <span className={classes.ToggleLine}></span>
      </div>
      <h3 className={classes.Brand}>Tasks+</h3>
      <nav>
        <ul className={classes.NavLists}>
          <li className={classes.NavList}>
            <button>Sign In</button>
          </li>
          <li className={classes.NavList}>
            <button>Sign Up</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
