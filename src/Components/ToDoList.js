import React, { Component } from "react";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      list: []
    };
  }

  changeUserInput(inputText) {
    this.setState({
      userInput: inputText
    });
  }

  addToList(input) {
    let listArray = this.state.list;
    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: ""
    });
    console.log(this.state.list);
  }

  render() {
    return (
      <div className="main">
        <input
          onChange={inputText => this.changeUserInput(inputText.target.value)}
          value={this.state.userInput}
          type="text"
        />
        <button onClick={() => this.addToList(this.state.userInput)}>
          Add
        </button>

        <ul>
          {this.state.list.map(val => (
            <li>{val} </li>
          ))}
        </ul>
      </div>
    );
  }
}
