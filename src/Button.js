import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button onClick={props.clicked}>{props.value}</button>
  )
}

Button.propTypes = {
  clicked: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default Button;
