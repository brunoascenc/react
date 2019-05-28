import React from 'react';
import './App.css';
import Nav from './Nav';
import Servico from './Servico';
import Clientes from './Clientes';
import About from './About';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App () {
  return(
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/home" component = {Home}/>
        <Route path = "/about" component = {About}/>
        <Route path = "/servico" component = {Servico}/>
        <Route path = "/clientes" component = {Clientes}/>
      </Switch>
    </div>
    </Router>
  )
}

export default App