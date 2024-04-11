import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Menu from './componentes/Menu';


function App() {
  
  return (
    <div className="App">

      <Header/>
      <Menu/>
      
      <Footer/>
      
      
    </div>
  );
}

export default App;
