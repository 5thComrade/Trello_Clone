import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Addlist from "./components/List/AddList/Addlist";

class App extends Component {
  render() {
    return (
      <Layout>
        <Addlist />
      </Layout>
    );
  }
}

export default App;
