import React from 'react';
import Nav from './Nav';
import './Menu.css';
import {Link} from 'react-router-dom';

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
      <Nav />
      <div className="menu-title">
        <h2>Veja o nosso menu</h2>
      </div>
      <div className="menu">
        <div className="menu-salgados">
          <h2>Salgados</h2>

          <h4>Coxinhas</h4>
          <img src={coxinha} alt="Coxinhas" />

          <h4>Kibe</h4>
          <img src={kibe} alt="Kibe" />

          <h4>Bolinha de queijo</h4>
          <img src={bolinha} alt="Bolinha" />
        </div>

        <div className="menu-lanches">
          <h2>Hamburguers</h2>

          <h4>X-Salada</h4>
          <img src={xsalada} alt="X-Salada" />
          <span className="descricao">
            <p>Hamburguer, Salada, Queijo e Tomate</p>
          </span>

          <h4>X-Burguer</h4>
          <img src={xburguer} alt="X-Burguer" />
          <span className="descricao">
            <p>Hamburguer e Queijo</p>
          </span>

          <h4>X-Bacon</h4>
          <img src={xbacon} alt="X-Bacon" />
          <span className="descricao">
            <p>Hamburguer, Queijo, Salada, Tomate e Bacon</p>
          </span>

          <h4>X-Tudo</h4>
          <img src={xtudo} alt="X-Tudo" />
          <span className="descricao">
            <p>2x Hamburguer, Queijo, Salada, Ovo, Bacon e cebola frita</p>
          </span>
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
