import React from 'react';
import './App.css';

function Banner() {
  return (
    <div>
      <header>
        <h2>Logo</h2>
        <nav>
          <ul>
            <li>Login</li>
            <li>Cadastrar</li>
          </ul>
        </nav>
        <div>
          <input type="text" placeholder="Pesquise..." />
          <button>Pesquisar</button>
        </div>
      </header>
    </div>
  );
}

export default Banner;
