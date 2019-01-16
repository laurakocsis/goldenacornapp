import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  return (
    props.children
  )
}

Display.propTypes = {
  children: PropTypes.element.isRequired
}

export default Display;
