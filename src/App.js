import React from 'react';
import {  BrowserRouter, Switch, Route} from 'react-router-dom';
import Game from './Game';
import Home from './Home';
import './App.css';

function App() {
  return(
    <BrowserRouter>
      <Route path='/' component={Home}  exact/>
      <Route path='/game' component={Game} />
    </BrowserRouter>
  );
}

export default App;
