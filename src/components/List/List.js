import React from "react";
import Card from "./Card/Card";
import Modal from "../Modal/Modal";
import classes from "./List.module.css";

class List extends React.Component {
  state = {
    showCardInput: false,
    showModal: false,
    listToBeDeleted: "",
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.listArray !== prevProps.listArray) {
      this.props.listArray.forEach((item) => {
        let cardString = localStorage.getItem(item);
        if (cardString) {
          let cardArr = cardString.split(",");
          this.setState({ [item]: cardArr });
        }
      });
    }
  };

  showCardInputHandler = (listName) => {
    this.setState({ showCardInput: true, ListName: listName });
  };

  closeCardInputHandler = () => {
    this.setState({ showCardInput: false });
  };

  saveCardNameHandler = (cardInputId) => {
    let cardTitle = document.querySelector(`#${cardInputId}`).value;
    let List = cardInputId.replace("_cardInput", "");
    let arr;
    if (this.state[List]) {
      arr = [...this.state[List]];
    } else {
      arr = [];
    }
    arr.push(cardTitle);
    localStorage.setItem([List], arr);
    this.setState({ [List]: arr });
    this.closeCardInputHandler();
  };

  drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    let list = card_id.slice(0, card_id.indexOf("_"));
    let arrayIndex = Number(
      card_id.slice(card_id.indexOf("_") + 1, card_id.length)
    );
    let newArray = [...this.state[list]];
    newArray.splice(arrayIndex, 1);
    localStorage.setItem([list], newArray);
    let movedNewArray = this.state[e.target.id]
      ? [...this.state[e.target.id]]
      : [];
    movedNewArray.push(document.getElementById(card_id).innerHTML);
    localStorage.setItem([e.target.id], movedNewArray);
    this.setState({ [list]: newArray, [e.target.id]: movedNewArray });
  };

  dragOver = (e) => {
    e.preventDefault();
  };

  showDeleteModal = (list) => {
    this.setState({ showModal: true, listToBeDeleted: list });
  };

  closeDeleteModal = () => {
    this.setState({ showModal: false, listToBeDeleted: "" });
  };

  deleteListHandler = () => {
    let data = localStorage.getItem("lists");
    let newList = data.split(",");
    newList = newList.filter((list) => {
      return list !== this.state.listToBeDeleted;
    });
    localStorage.setItem("lists", newList);
    localStorage.removeItem(this.state.listToBeDeleted);
    window.location.reload();
    this.closeDeleteModal();
  };

  render() {
    let modal = null;
    if (this.state.showModal) {
      modal = (
        <Modal
          title={this.state.listToBeDeleted}
          closeModal={this.closeDeleteModal}
          DeleteList={this.deleteListHandler}
        />
      );
    }
    let listArr = this.props.listArray;
    let listComponent = listArr.map((item) => {
      let cards = null;
      if (this.state[item]) {
        cards = this.state[item].map((cardTitle, index) => {
          return (
            <Card
              cardTitle={cardTitle}
              key={Math.random()}
              setId={`${item}_${index}`}
            />
          );
        });
      }
      return (
        <div className={classes.List} key={Math.random()}>
          <p className={classes.Title}>{item}</p>
          <h3
            className={classes.DeleteList}
            onClick={() => this.showDeleteModal(item)}
          >
            ...
          </h3>
          <hr />
          <div
            id={item}
            onDrop={this.drop}
            onDragOver={this.dragOver}
            className={classes.CardsSection}
          >
            {cards}
          </div>
          {this.state.showCardInput && this.state.ListName === item ? (
            <div className={classes.InputBox}>
              <textarea
                className={classes.TextArea}
                id={item + "_cardInput"}
                rows="4"
                placeholder="Enter a title for this card..."
              ></textarea>
              <div>
                <button
                  className={classes.SaveCard}
                  onClick={() => this.saveCardNameHandler(item + "_cardInput")}
                >
                  Add Card
                </button>
                <button
                  className={classes.DeleteCard}
                  onClick={this.closeCardInputHandler}
                >
                  X
                </button>
              </div>
            </div>
          ) : (
            <button
              className={classes.AddCard}
              onClick={() => this.showCardInputHandler(item)}
            >
              + Add a card
            </button>
          )}
        </div>
      );
    });
    return (
      <React.Fragment>
        {modal}
        {listComponent}
      </React.Fragment>
    );
  }
}

export default List;
