import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    
    <div className="nav">
      <div className="logo">
        <div>
          <FontAwesomeIcon icon={faSmileWink} color ="rgb(233, 147, 49)" />
          <Link to="/">
            <h1>Pat Salgados</h1>
          </Link>
        </div>
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
