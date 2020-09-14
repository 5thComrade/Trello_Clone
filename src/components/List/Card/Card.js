import React from "react";
import classes from "./Card.module.css";

const card = (props) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <p
      className={classes.Card}
      id={props.setId}
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.cardTitle}
    </p>
  );
};

export default card;
