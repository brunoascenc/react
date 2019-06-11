import React, { Component } from 'react';
import './App.css';
import Search from './Search'

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
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
  render() {
    return (
      <div className="App">
        <Search handleSubmit={this.handleSubmit} handleChange = {this.handleChange}/>
      </div>
    );
  }
}

export default App;
