import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }

  handleClick() {
    this.setState({
      sum: parseInt(this.state.number1) + parseInt(this.state.number2)
    });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          type="number"
          className="inputLine"
          onChange={e => this.handleChange("number1", e.target.value)}
        />
        <input
          type="number"
          className="inputLine"
          onChange={e => this.handleChange("number2", e.target.value)}
        />
        <button className="confirmationButton" onClick={this.handleClick}>
          Add
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}
export default Sum;
