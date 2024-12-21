import React from 'react';
import ReactDOM from 'react-dom/client'; // Importar desde 'react-dom/client' en lugar de 'react-dom'
import './index.css'; // Asegúrate de que esta ruta es correcta
import App from './App'; // Importa el componente principal App

// Crea una raíz usando React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
