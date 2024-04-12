import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import './Menu.css'; // Asegúrate de tener un archivo de estilos CSS para tus estilos personalizados
import Mecatrónica from './meca';
import DN from './DN';
import Ti from './Ti';

function Menu() {
  const [selectedComponent, setSelectedComponent] = useState('');
  const [user, setUser] = useState(null);

  const handleGoogleLogin = (response) => {
    console.log('Google login successful:', response);
    const { name, email } = response.profileObj; // Obtener datos del perfil de Google
    setUser({ name, email}); // Establecer el estado del usuario
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed:', error);
   
  };

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
      <div className="google-login-container">
        <GoogleLogin
          clientId="980471875827-4k6r5skmm8fqpmndh2jsa37q8ip439n3.apps.googleusercontent.com"
          buttonText="Iniciar sesión con Google"
          onSuccess={handleGoogleLogin}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
}

export default Menu;
