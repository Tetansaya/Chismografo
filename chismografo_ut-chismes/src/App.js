import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
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
      <Header />
      <div className="button-container">
        <button onClick={() => setSelectedComponent('meca')}>Mecatrónica</button>
        <button onClick={() => setSelectedComponent('ti')}>Ti</button>
        <button onClick={() => setSelectedComponent('dn')}>DN</button>
      </div>
      <div className="component-container">
        {renderComponent()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
