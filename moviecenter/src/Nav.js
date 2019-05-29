import React from 'react';
import './App.css';

function Nav() {
  return (
    <div>
      <header>
        <div className="topo-nav">
          <div>
            <h2>Logo</h2>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Cadastrar</a>
              </li>
            </ul>
          </nav>
          <div>
            <input type="text" placeholder="Pesquisar" />
            <button>Pesquisar</button>
          </div>
        </div>

        <div className="carousel">
          <i class="fas fa-chevron-left prev" />
          <i class="fas fa-chevron-right next" />
          <div className="carousel-topo">
            <h3>Foto1</h3>
            <h3>Foto2</h3>
            <h3>Foto1</h3>
            <h3>Foto1</h3>
            <h3>Foto1</h3>
            <h3>Foto1</h3>
          </div>
        </div>
      </header>

      <div class="categorias">
        <h3>Categorias</h3>
        <ul>
          <li>
            <a href="#">Melhores 2018</a>
          </li>
          <li>
            <a href="#">Melhores 2002</a>
          </li>
          <li>
            <a href="#">Filmes Pixar</a>
          </li>
          <li>
            <a href="#">Comédia</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
