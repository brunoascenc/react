import React, { Component } from 'react';
import './App.css';
import Search from './Search'

class App extends Component {
  constructor (props) {
    super(props)
    console.log('oi')

    const movies = [
      {id: 0, title: "asasas", overview:'ssss'},
      {id: 2, title: "asasas", overview:'ssss'},
      {id: 3, title: "asasas", overview:'ssss'},
      {id: 4, title: "asasas", overview:'ssss'}
    ]

    var movieRows = []

    movies.forEach((movie) => {
      console.log(movie.id)
      const movieRow = <table>
        <tbody>
          <tr>
            <td>
              <img src = ""/>
            </td>
            <td>
              {movie.title}
            </td>
          </tr>
        </tbody>
      </table>
      movieRows.push(<p>movie title: {movie.title}</p>)
    })

    this.state = {rows: movieRows}
  }



  render() {
    return (
      <div className="App">
        <Search/>

      {this.state.rows}
      </div>
    );
  }
}

export default App;
