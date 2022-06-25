import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import  SecondComponent  from "./shared/components/SecondComponent";
import  FirstComponent from "./shared/components/FirstComponent";
class App extends Component {
  render() {
    return (
      <div className="container" style={{ height: "100vh" }}>
        <FirstComponent />
        <SecondComponent />
      </div>
    );
  }
}

export default App;
