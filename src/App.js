import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs/>
      <Services />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
