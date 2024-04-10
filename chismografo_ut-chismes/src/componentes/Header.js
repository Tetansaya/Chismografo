import React from 'react';
import './Header.css';
import LogoUTCH from '../imagenes/LogoUTCH.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={LogoUTCH} alt="Logo de la Aplicación" className="logo" />
        <h1>Chismografo UTCH</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/acerca">Acerca</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;