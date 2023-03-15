import React from 'react';
import './Header.css';

import logo from './logo5.png'

const Header = () => {
  

  return (
    <header>
      <nav className='logo'>
        <img src={logo} alt={''} />
        <h1>Distribuidora El Camino</h1>
      </nav>
    </header>
  );
};

export default Header;
