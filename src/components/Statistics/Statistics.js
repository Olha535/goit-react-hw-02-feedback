import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <ul>
        <li>
          Good: <p>{this.props.good}</p>
        </li>
        <li>
          Neutral: <p>{this.props.neutral}</p>
        </li>
        <li>
          Bad: <p>{this.props.bad}</p>
        </li>
        <li>
          Total: <p>{this.props.total}</p>
        </li>
        <li>
          Positive feedback: <p>{this.props.positivePercentage} %</p>
        </li>
      </ul>
    );
  }
}

export default Statistics;
