import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <div className="nav">
      
      <div className="Logo">
        <Link to="/">
          <h1>Pat Salgados</h1>
        </Link>
      </div>

      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/menu">
            <li>Menu</li>
          </Link>
          <Link to="/contato">
            <li>Contato</li>
          </Link>
          <Link to="/sobre">
            <li>Sobre</li>
          </Link>
        </ul>
      </nav>

    </div>
  );
}
