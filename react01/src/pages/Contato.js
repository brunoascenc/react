import React from 'react';
import './Contato.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

import salgados from '../assets/salgados1.jpg';

export default function Contato() {
  return (
    <div className="contato-container">
      <div className="container">
        <Nav />

        <div className="contato">
          <div>
            <img src={salgados} alt="Salgados" />
          </div>

          <div className="contato-form">
            <h2>Entre em contato</h2>
            <form>
              <div>
                <div className="input-nome">
                  <label for="nome">Nome *</label>
                  <input type="text" name="nome" placeholder="Nome" />
                </div>
                <div className="input-sobrenome">
                  <label for="nome">Sobrenome *</label>
                  <input type="text" name="sobrenome" placeholder="Sobrenome" />
                </div>
              </div>

              <label for="email">Email * </label>
              <input type="email" name="email" />

              <label for="duvidas">Selecione *</label>
              <span className="options-span">
                {' '}
                Entregamos somente na região de SP
              </span>
              <select name="duvidas">
                <option value="encomenda">Encomendas</option>
                <option value="horarios">Funcionamento</option>
                <option value="horarios">Preço</option>
              </select>

              <label for="detalhes">Detalhes *</label>
              <textarea rows="5" cols="50" name="detalhes" />

              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>

        <footer className="menu-footer">
          <div className="logo-footer">
            <FontAwesomeIcon icon={faSmileWink} size="2x" />
          </div>

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
    </div>
  );
}
