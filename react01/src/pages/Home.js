import React from 'react';
import Nav from './Nav';
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
        <Nav />
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
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <br />
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <br />
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <br />
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </div>

        <footer>
          <p>AV. Paulista, São Paulo - SP, 101</p>
        </footer>
      </header>
    </div>
  );
}
