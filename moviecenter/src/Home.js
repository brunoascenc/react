import React from 'react';
import './App.css';

function Home(props) {
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
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              placeholder="Search a movie"
              onChange={props.handleChange}
            />
            <button onSubmit={props.handleSubmit}>
              <i class="fas fa-search" />
            </button>
          </form>
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
            <option>Valor 1</option>
            <option selected>Release Year</option>
            <option>Valor 3</option>
          </select>
        </div>

        <div />
      </div>
    </div>
  );
}

export default Home;
