import React, { Component } from "react";
import "./App.css";
import ToDoList from "./Components/ToDoList";
import Edit from "./Components/Edit";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToDoList />
        <Edit />
      </React.Fragment>
    );
  }
}

export default App;
