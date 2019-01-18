import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => <h1>{value} 🌰</h1>;

Display.propTypes = {
  value: PropTypes.number.isRequired
}

export default Display;
