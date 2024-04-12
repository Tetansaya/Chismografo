import React, { useState } from 'react';
import './Menu.css'; // Asegúrate de tener un archivo de estilos CSS para tus estilos personalizados
import Mecatrónica from './meca';
import DN from './DN';
import Ti from './Ti';

function Menu() {
  const [selectedComponent, setSelectedComponent] = useState('');
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Meca':
        return <Mecatrónica />;
      case 'Ti':
        return <Ti />;
      case 'dn':
        return <DN />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="button-container">
        <button className="big-button button1" onClick={() => setSelectedComponent('Meca')}>Mecatrónica</button>
        <button className="big-button button2" onClick={() => setSelectedComponent('Ti')}>TI</button>
        <button className="big-button button3" onClick={() => setSelectedComponent('dn')}>DN</button>
      </div>
      <div className="component-container">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Menu;
