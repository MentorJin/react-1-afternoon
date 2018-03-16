import React, { Component } from "react";
import EvenAndOdds from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";

class TopicBrowser extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Hello World!</p>
        <EvenAndOdds />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    );
  }
}

export default TopicBrowser;
