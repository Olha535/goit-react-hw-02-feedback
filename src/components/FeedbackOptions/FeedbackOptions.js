import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    return (
      <ul>
        {this.props.options.map(option => (
          <li key={option}>
            <button
              type="button"
              value={option}
              onClick={() => this.props.onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
};

export default FeedbackOptions;
