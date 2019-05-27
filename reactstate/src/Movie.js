import React from 'react';

const Movie = ({name, price, id, image}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{id}</p>
    </div>
  );
};

export default Movie;
