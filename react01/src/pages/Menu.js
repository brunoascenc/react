import React from 'react';
import Nav from './Nav';
import './Menu.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

/* IMAGENS */
import coxinha from '../assets/coxinha.jpg';
import kibe from '../assets/kibe.jpg';
import bolinha from '../assets/bolinha.jpg';
import xsalada from '../assets/xsalada.jpg';
import xtudo from '../assets/xtudo.jpg';
import xbacon from '../assets/xbacon.jpg';
import xburguer from '../assets/xburguer.jpg';

export default function Home() {
  return (
    <div className="menu-container">
      <div className="container">
        <Nav />

        <div className="menu-banner">
          <h1>p</h1>
        </div>

        <div className="menu-title">
          <h2>Veja O Nosso menu</h2>
        </div>

        <div className="menu">
          <div className="menu-salgados">
            <h2>Salgados</h2>

            <div className="detalhes">
              <img src={coxinha} alt="Coxinhas" />
              <div>
                <h4>Coxinha</h4>
                <span className="descricao">
                  <p>
                    frango desfiado, cebolas médias picadas, salsinha picada e
                    sal
                  </p>
                </span>
              </div>
            </div>

            <div className="detalhes">
              <img src={kibe} alt="Kibe" />
              <div>
                <h4>Kibe</h4>
                <span className="descricao">
                  <p>
                    carne bovina magra moída, folhas de louro, pimenta-do-reino,
                    dentes de alho bem picados, cebola grande em cubinhos e
                    salsinha picada
                  </p>
                </span>
              </div>
            </div>

            <div className="detalhes">
              <img src={bolinha} alt="Bolinha" />
              <div>
                <h4>Bolinha de queijo</h4>
                <span className="descricao">
                  <p>
                   mussarela em cubinhos, salsa picada, folhas de manjericão fresco picado e sal
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="menu-lanches">
            <h2>Hamburguers</h2>

            <div className="detalhes">
              <img src={xsalada} alt="X-Salada" />
              <div>
                <h4>X-Salada</h4>
                <span className="descricao">
                  <p>Hamburguer, Salada, Queijo e Tomate</p>
                </span>
              </div>
            </div>

            <div className="detalhes">
              <img src={xburguer} alt="X-Burguer" />
              <div>
                <h4>X-Burguer</h4>
                <span className="descricao">
                  <p>Hamburguer e Queijo</p>
                </span>
              </div>
            </div>

            <div className="detalhes">
              <img src={xbacon} alt="X-Bacon" />
              <div>
                <h4>X-Bacon</h4>
                <span className="descricao">
                  <p>Hamburguer, Queijo, Salada, Tomate e Bacon</p>
                </span>
              </div>
            </div>

            <div className="detalhes">
              <img src={xtudo} alt="X-Tudo" />
              <div>
                <h4>X-Tudo</h4>
                <span className="descricao">
                  <p>
                    2x Hamburguer, Queijo, Salada, Ovo, Bacon e cebola frita
                  </p>
                </span>
              </div>
            </div>
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
