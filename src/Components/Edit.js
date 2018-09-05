import React, { Component } from "react";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      item: "",
      EditMode: true
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (e.keyCode === 13) {
      this.setState({
        item: e.target.value
      });
    }
  }

  changeUserInput(inputText) {
    this.setState({
      userInput: inputText
    });
  }

  fetchDefaultView = () => {
    return <p>View</p>;
  };

  fetchEditView = () => {
    return <p>Edit View</p>;
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          onKeyDown={this.addItem}
          value={this.state.userInput}
          onChange={inputText => this.changeUserInput(inputText.target.value)}
        />
        <p className={this.state.EditMode ? "hidden" : ""}>View new</p>
        <p className={this.state.EditMode ? "hidden" : ""}>View</p>
      </React.Fragment>
    );
  }
}
