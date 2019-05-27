import React, {useState, createContext} from 'react'

export const MovieContext = createContext()


export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$18',
            id: 23124
        },
        {
            name: 'Game of thrones',
            price: '$10',
            id: 15251
        },
        {
            name: 'Inception',
            price: '$18',
            id: 23255
        }
    ])
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}