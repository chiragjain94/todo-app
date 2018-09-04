import React, { Component } from "react";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      list: []
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
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
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      this.addToList(e.target.value);
    }
  }

  deleteItemFromList(inputItem) {
    console.log(inputItem.val);

    var arrayList = this.state.list;
    var index = arrayList.indexOf(inputItem.val);
    arrayList.splice(index, 1);
    this.setState({ list: arrayList });
  }

  render() {
    return (
      <div className="main">
        <input
          onChange={inputText => this.changeUserInput(inputText.target.value)}
          value={this.state.userInput}
          type="text"
          onKeyDown={this.handleKeyPress}
        />
        <button onClick={() => this.addToList(this.state.userInput)}>
          Add
        </button>

        <ul>
          {this.state.list.map(val => (
            <div>
              <li type="text">{val} </li>
              <button onClick={() => this.deleteItemFromList({ val })}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
