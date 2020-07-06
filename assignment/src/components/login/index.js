import React, { Component } from "react";
import Login from "./Login";
import Header from "./Header";

export default class index extends Component {
  render() {
    return (
      <div className="main-div">
        <Header />
        <Login />
      </div>
    );
  }
}
