import React from 'react'
import Movie from './Movie'

function MovieList (props) {
    return(
        <div className = "container">
            <div className="movieList">
                {
                    props.movies.map((movie, i) => {
                        return(
                            <Movie key={i} image = {movie.poster_path} title = {movie.original_title}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MovieList