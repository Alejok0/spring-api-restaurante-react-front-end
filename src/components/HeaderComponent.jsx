import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderComponent() {
  const navigate = useNavigate();

  return (
    <header className="navbar navbar-expand-lg" style={{ backgroundColor: '#fbc02d' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: '#333', fontWeight: 'bold' }}>Restaurante</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{ border: 'none', backgroundColor: 'transparent' }}>
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/')} style={{ color: '#333', fontSize: '1.1rem', cursor: 'pointer' }}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/menu')} style={{ color: '#333', fontSize: '1.1rem', cursor: 'pointer' }}>Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/producto')} style={{ color: '#333', fontSize: '1.1rem', cursor: 'pointer' }}>Producto</a>
            </li>
          </ul>
          <button className="btn btn-dark" onClick={() => alert("Sesión cerrada")}>Cerrar sesión</button>
        </div>
      </div>

      <title>Control restaurantero</title>
       <link rel="shortcut icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWDgh9iQsF02C1EOdKL_cIMrfX-YKAAliXw&s" />
    </header>
  );
}

export default HeaderComponent;
