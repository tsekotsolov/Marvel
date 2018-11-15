import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import Router from "./router/Router";
import { NotificationContainer } from "react-notifications";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
        <NotificationContainer />
      </div>
    );
  }
}

export default App;
