import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className="home-container">
      <header className="landing-page">

      <div className="nav-home">
      <div className="logo-home">
        <div>
          <FontAwesomeIcon icon={faSmileWink} />
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
      
      



        <div className="landing-content">
          <div>
            {/* <FontAwesomeIcon icon={faSmileWink} size="3x" />
            <h1>Pat Salgados</h1>
            <h3>São Paulo - SP</h3> */}
            <p>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum." - Lorem, 2019
            </p>
          </div>
        </div>

        <div className="social-icons">
          <div>
            <a href="http://facebook.com">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a href="http://instagram.com">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="http://twitter.com">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="http://youtube.com">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </div>

        <footer className = "home-footer">
          <p>AV. Paulista, São Paulo - SP, 101</p>
        </footer>
      </header>
    </div>
  );
}
