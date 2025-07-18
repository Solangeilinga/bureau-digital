import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Shop from './components/Shop';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div id="header"><Header /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="shop"><Shop /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default App;
