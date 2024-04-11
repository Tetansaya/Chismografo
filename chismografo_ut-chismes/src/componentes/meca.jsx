import React, { useState } from 'react';

const Mecatrónica = () => {
  // Estado para almacenar los chismes
  const [chismes, setChismes] = useState([]);
  // Estado para almacenar el chisme ingresado por el usuario
  const [nuevoChisme, setNuevoChisme] = useState('');

  // Función para manejar el cambio en el input del nuevo chisme
  const handleInputChange = (event) => {
    setNuevoChisme(event.target.value);
  };

  // Función para manejar el envío del nuevo chisme
  const handleSubmit = (event) => {
    event.preventDefault();
    if (nuevoChisme.trim() !== '') {
      setChismes([nuevoChisme, ...chismes]);
      setNuevoChisme('');
    }
  };

  return (
    <div>
      <h1>Chismes de Mecatrónica</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa un nuevo chisme..."
          value={nuevoChisme}
          onChange={handleInputChange}
        />
        <button type="submit">Publicar</button>
      </form>
      <h2>Chismes:</h2>
      <ul>
        {chismes.map((chisme, index) => (
          <li key={index}>{chisme}</li>
        ))}
      </ul>
    </div>
  );
};

export default Mecatrónica;