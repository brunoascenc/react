import React, {Component} from 'react';
import './App.css';
import Home from './Home'
import MovieList from './MovieList'

class App extends Component{
  constructor(){
    super()
    this.state = {
      movies:[],
      searchTerm: ''
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data)
      this.setState({movies: [...data.results]})
    })
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render(){
    return (
      <div className="App">
        <Home movies = {this.state.movies} handleSubmit = {this.handleSubmit} handleChange = {this.handleChange}/>
        <MovieList movies = {this.state.movies}/>
      </div>
    )
  }
  
}

export default App;
