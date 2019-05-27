import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'



const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div>
      <nav>
      <h3>Bruno</h3>
      <p>List of Movies: {movies.length}</p>
      </nav>
    </div>
  );
};

export default Nav;
