import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(val) {
    this.setState({
      userInput: val
    });
  }

  handleClick() {
    let reversed = this.state.userInput
      .split("")
      .reverse()
      .join("");
    if (this.state.userInput === reversed) {
      this.setState({
        palindrome: "true"
      });
    } else {
      this.setState({
        palindrome: "false"
      });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button className="confirmationButton" onClick={this.handleClick}>
          Check
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
