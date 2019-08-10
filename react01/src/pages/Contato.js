import React from 'react';
import './Contato.css';
import Nav from './Nav';

import {Link} from 'react-router-dom';

import salgados from '../assets/salgados1.jpg';

export default function Contato() {
  return (
    <div className="contato-container">
      <Nav />

      <div className="contato">
        <div>
          <img src={salgados} alt="Salgados" />
        </div>

        <div className="contato-form">
          <form>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Sobrenome" />

            <input type="email" placeholder="Email" />

            <select>
              <h3>Assunto</h3>
              <option value="encomenda">Encomendas</option>
              <option value="horarios">Funcionamento</option>
              <option value="horarios">Preço</option>
            </select>
          </form>
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
