import React from 'react';
import './Header.css';

import logo from './exo-white.png'

const Header = () => {
  

  return (
    <header>
      <nav className='logo'>
        <img src={logo} alt={''} />
        {/* <h1>EXO DIGITAL</h1> */}
      </nav>
    </header>
  );
};

export default Header;
