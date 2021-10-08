import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

class Notification extends Component {
  render() {
    return <p className={s.title}>{this.props.message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
