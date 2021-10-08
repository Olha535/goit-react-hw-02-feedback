import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <Container>
          <h1>{title}</h1>
          {children}
        </Container>
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
