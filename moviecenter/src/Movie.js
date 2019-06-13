import React from 'react';

function Movie(props) {
  return (
    <div>
      {props.image == null ? (
        <img src="logo.svg" />
      ) : (
        <img src={`http://image.tmdb.org/t/p/w185${props.image}`} />
      )}
    </div>
  );
}

export default Movie;
