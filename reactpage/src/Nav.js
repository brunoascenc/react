import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/servico">
              <li>Serviços</li>
            </Link>
            <Link to="/clientes">
              <li>Clientes</li>
            </Link>
            <Link to="/parceiros">
              <li>Parceiros</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
