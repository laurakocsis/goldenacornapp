import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ children }) => children;

Display.propTypes = {
  children: PropTypes.element.isRequired
}

export default Display;
