import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Menu from './componentes/Menu';
import Mecatrónica from './componentes/meca';
import Ti from './components/ti';
import DN from './componentes/DN';

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'meca':
        return <Mecatrónica />;
      case 'ti':
        return <Ti />;
      case 'dn':
        return <DN />;
      default:
        return null;
    }
  };

  return (
    <div className="App">

      <Header/>
      <Menu/>
      
      <Footer/>

     
    </div>
  );
}

export default App;
