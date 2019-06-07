import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="home">
      <header>
        <h2 className="title">Logo</h2>
        <nav>
          <ul>
            <li>
              <a>Login</a>
            </li>
          </ul>
          <input type="text" placeholder="Search a movie" />
          <button>Search</button>
        </nav>
      </header>

      <div className="sideNav">
        <div className="categories">
          <h4 className="title">Movies</h4>
          <ul>
            <li>
              <a>Action</a>
            </li>
            <li>
              <a>Adventre</a>
            </li>
            <li>
              <a>Animation</a>
            </li>
            <li>
              <a>Biography</a>
            </li>
            <li>
              <a>Comedy</a>
            </li>
            <li>
              <a>Crime</a>
            </li>
            <li>
              <a>Documentary</a>
            </li>
            <li>
              <a>Drama</a>
            </li>
            <li>
              <a>Fantasy</a>
            </li>
          </ul>

          <select name="select">
            <option value="valor1">Valor 1</option>
            <option value="valor2" selected>
              Release Year
            </option>
            <option value="valor3">Valor 3</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Home;
