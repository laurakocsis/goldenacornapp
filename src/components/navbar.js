import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/states">With States</NavLink>
      <NavLink to="/redux">With Redux</NavLink>
    </div>
  )
}

export default Navbar;
