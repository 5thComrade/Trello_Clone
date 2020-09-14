import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Sidedrawer.module.css";

const sideDrawer = (props) => {
  let sideNav = null;
  if (props.show) {
    sideNav = (
      <React.Fragment>
        <Backdrop clicked={props.close} show={props.show} />
        <div className={classes.SideDrawer}>
          <h3 className={classes.Brand}>Tasks+</h3>
          <hr />
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
      </React.Fragment>
    );
  }
  return <React.Fragment>{sideNav}</React.Fragment>;
};

export default sideDrawer;
