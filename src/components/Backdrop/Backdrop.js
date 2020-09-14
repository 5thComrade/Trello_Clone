import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = (props) => {
  let backdrop = null;
  if (props.show) {
    backdrop = <div className={classes.Backdrop} onClick={props.clicked}></div>;
  }
  return <React.Fragment>{backdrop}</React.Fragment>;
};

export default backdrop;
