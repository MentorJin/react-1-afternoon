import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
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
    let evens = this.state.userInput
      .split(",")
      .filter(e => e % 2 === 0)
      .join();
    let odds = this.state.userInput
      .split(",")
      .filter(e => e % 2 !== 0)
      .join();
    this.setState({
      evenArray: evens,
      oddArray: odds
    });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens And Odds</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button className="confirmationButton" onClick={this.handleClick}>
          Split
        </button>
        <span className="resultsBox">Evens: [{this.state.evenArray}]</span>
        <span className="resultsBox">Odds: [{this.state.oddArray}]</span>
      </div>
    );
  }
}

export default EvenAndOdd;
