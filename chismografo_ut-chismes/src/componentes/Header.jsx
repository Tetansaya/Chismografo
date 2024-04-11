import React from 'react';
import './Header.css';
import LogoUTCH from '../imagenes/LogoUTCH.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          
        </div>
        <div className="title-container">
          <h1>UT-Chismes</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/acerca">Cerrar sesion</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;