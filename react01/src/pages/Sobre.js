import React, { useRef, useEffect } from 'react';
import './Sobre.css';
import Nav from './Nav';
import Map from './Map';
import { TweenMax, Power3 } from 'gsap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import lanches from '../assets/lanches.jpg';

export default function Sobre() {
  let sobreImg,
    sobreTxt = useRef();

  useEffect(() => {
    TweenMax.fromTo(
      sobreImg,
      0.8,
      {
        opacity: 0,
        x: 15,
        ease: Power3.easeInOut
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.2
      }
    );
    TweenMax.fromTo(
      sobreTxt,
      0.8,
      {
        opacity: 0,
        x: -50,
        ease: Power3.easeInOut
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.3
      }
    );
  }, []);

  return (
    <div className="sobre-container">
      <div className="container">
        <Nav />
        <div className="sobre">
          <div ref={el => {sobreTxt = el;}} className="sobre-texto">
            <h1>Sobre nós</h1>
            <span className="destaque">
              <p>
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book."
              </p>
            </span>
            <p>
              {' '}
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div>
            <img ref={el => {sobreImg = el;}}src={lanches}alt="Lanches"/>
          </div>

          <div className="mapa">
            <Map />
          </div>

          <div class="funcionamento">
            <h2>Pat Salgados - SP</h2>
            <a href="#"> AV.Paulista - 123 </a>
            <p>Seg – Sexta 10am até 18pm</p>
            <p>Sab – Dom 10am até 14pm</p>
            <p>TEL – (11) 1234-5678</p>
            <br />

            <h2>Pat Salgados - SP</h2>
            <a href="#"> Rua da glória - 123 </a>
            <p>Seg – Sexta 10am até 18pm</p>
            <p>Sab – Dom 10am até 14pm</p>
            <p>TEL – (11) 1234-5678</p>
            <br />

            <h2>Pat Salgados - RJ</h2>
            <a href="#"> Copacabana - 123 </a>
            <p>Seg – Sexta 10am até 18pm</p>
            <p>Sab – Dom 10am até 14pm</p>
            <p>TEL – (21) 1234-5678</p>
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
