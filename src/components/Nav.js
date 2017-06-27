import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/pics">Robo Pics</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
    </ul>
  </header>
);

export default Header;