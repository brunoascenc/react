import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Menu from './pages/Menu';

export default function Routes(){
    return(
        <BrowserRouter>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/contato" component = {Contato}/>
          <Route path = "/sobre" component = {Sobre}/>
          <Route path = "/menu" component = {Menu}/>
        </BrowserRouter>
    );
};