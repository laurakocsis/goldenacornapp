import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ clicked, value }) => <button onClick={clicked}>{value}</button>;

Button.propTypes = {
  clicked: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default Button;
