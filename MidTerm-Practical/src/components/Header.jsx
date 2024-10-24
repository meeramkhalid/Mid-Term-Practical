import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';


const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  </header>
);

export default Header;
