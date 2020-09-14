import React from "react";
import Navbar from "../Navbar/Navbar";
import SideDrawer from "../SideDrawer/Sidedrawer";
import classes from "./Layout.module.css";

class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };

  showSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: true,
    });
  };

  closeSideDrawer = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar sideDrawer={this.showSideDrawerHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          close={this.closeSideDrawer}
        />
        <main className={classes.MainContent}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
