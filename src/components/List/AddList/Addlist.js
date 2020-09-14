import React from "react";
import classes from "./Addlist.module.css";
import List from "../List";

class Addlist extends React.Component {
  state = {
    showInput: false,
    lists: [],
  };

  componentDidMount = () => {
    let listString = localStorage.getItem("lists");
    if (listString) {
      let listArray = listString.split(",");
      if (listArray.length > 0) {
        this.setState({ lists: listArray });
      }
    }
  };

  showInputHandler = () => {
    this.setState({ showInput: true });
  };

  closeInputHandler = () => {
    this.setState({ showInput: false });
  };

  saveListNameHandler = () => {
    let listName = document.querySelector("#InputField").value;
    let arr = [...this.state.lists];
    arr.push(listName);
    localStorage.setItem("lists", arr);
    this.setState({ lists: arr });
    this.closeInputHandler();
  };

  render() {
    let displayValue = (
      <button className={classes.AddlistButton} onClick={this.showInputHandler}>
        + Add a list
      </button>
    );
    if (this.state.showInput) {
      displayValue = (
        <div className={classes.InputBox}>
          <input
            className={classes.InputField}
            type="text"
            placeholder="Enter list title..."
            id="InputField"
          ></input>
          <div>
            <button
              className={classes.Addlist}
              onClick={this.saveListNameHandler}
            >
              Add List
            </button>
            <button
              className={classes.Closelist}
              onClick={this.closeInputHandler}
            >
              X
            </button>
          </div>
        </div>
      );
    }
    return (
      <React.Fragment>
        <List listArray={this.state.lists} />
        {displayValue}
      </React.Fragment>
    );
  }
}

export default Addlist;
