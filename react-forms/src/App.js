import React, { Component } from "react";
import "./App.css";
// import ReactFormWithRef from "./components/ReactFormWithRef";
// import ReactFormWithFormik from "./components/ReactFormWithFormik";
import ReactwithFormikVideo from "./components/ReactwithFormikVideo";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {

  
  render() {
    return (
      <div className="container" style={{ height: "100vh" }}>
        {/* <ReactFormWithRef /> */}
        {/* <ReactFormWithFormik/> */}
        <ReactwithFormikVideo/>
      </div>
    );
  }
}

export default App;
