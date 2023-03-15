import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Links from './components/Links/Links';
import Footer from './components/Footer/Footer';

import Cardlist from './components/card/Cardlist';

import './App.css'

const App = () => {

  return (
    <div className='App' >    
    <Routes>
      <Route path='/' element={<div><Header /><Links /><Footer /></div>} />
      <Route exact path='/catalogo' element={<Cardlist/>} />
    </Routes>
  </div>
  );
};

export default App;
