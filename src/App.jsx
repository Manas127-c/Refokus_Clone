import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';
import Cards from './components/Cards';
const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 font-["Satoshi"]'>
      <Navbar/>
      <Home/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
    </div>
  );
}

export default App;
