import React from 'react';
import './Sobre.css';
import Nav from './Nav';

import { Link } from 'react-router-dom';

import lanches from '../assets/lanches.jpg';

export default function Sobre() {
  return (
    <div className="sobre-container">
      <Nav />
      <div className="sobre">
        <div className="sobre-texto">
          <h1>Sobre nós</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div>
          <img src={lanches} alt="Lanches" />
        </div>
      </div>

      <footer>
        <nav className="footerNav">
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
      </footer>
    </div>
  );
}
