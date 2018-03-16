import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy"
      ],
      userInput: "",
      filteredArray: []
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
    let filtered = this.state.unFilteredArray.filter(e =>
      e.toLowerCase().includes(this.state.userInput.toLowerCase())
    );
    this.setState({
      filteredArray: filtered
    });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button className="confirmationButton" onClick={this.handleClick}>
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
