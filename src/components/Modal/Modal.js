import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop clicked={props.closeModal} show="true" />
      <div className={classes.Modal}>
        <h3 className={classes.Title}>Delete {props.title} List?</h3>
        <div className={classes.ButtonDiv}>
          <button className={classes.DeleteList} onClick={props.DeleteList}>
            Yes
          </button>
          <button className={classes.Cancel} onClick={props.closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default modal;
