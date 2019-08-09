import React from 'react';
import Nav from './Nav';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileWink } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
  return (
    <div className="home-container">
      <header className="landing-page">
        <Nav />
        <div class="landing-content">
          <div>
            <FontAwesomeIcon icon={faSmileWink} size = "7x"/>
            <h1>Pat Salgados</h1>
            <h3>São Paulo - SP</h3>
          </div>
        </div>

        <div className = "social-icons">
          <div>
          <FontAwesomeIcon icon={faFacebookF} size = "2x"/>
          <FontAwesomeIcon icon={faInstagram} size = "2x"/>
          <FontAwesomeIcon icon={faTwitter} size = "2x"/>
          <FontAwesomeIcon icon={faYoutube} size = "2x"/>
          </div>
        </div>

        <footer>
          <p>AV. Paulista, São Paulo - SP, 101</p>
        </footer>
      </header>
    </div>
  );
}
