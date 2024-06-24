

import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    const handleLogout = () => {
      fetch('/api/logout', {
        method: 'GET',
        credentials: 'same-origin' // Incluye las cookies en la solicitud
      })
      .then(response => {
        if (response.ok) {
          // Redirige al usuario a la página de inicio de sesión u otra página
          window.location.href = '/';
        } else {
          console.error('Error al cerrar sesión');
        }
      })
      .catch(error => {
        console.error('Error en la solicitud de cerrar sesión:', error);
      });
    };

    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
      logoutButton.addEventListener('click', handleLogout);
    }

    return () => {
      if (logoutButton) {
        logoutButton.removeEventListener('click', handleLogout);
      }
    };
  }, []);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logotipo">
          <img src="" alt="Logotipo" />
        </div>
        <a href="#" className="nav-link">Tareas</a>
        <a href="#" className="nav-link">Problemas</a>
        <a href="#" className="nav-link">Sincronizacion</a>
        <button id="logout-button" className="logout-button">Cerrar Sesión</button>
      </nav>
      <main className="main">
        <div className="form-container">
          <h1>Bienvenido al área de administración</h1>
        </div>
      </main>
    </div>
  );
};

export default App;
