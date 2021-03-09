import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Navs from './components/Navs';

import './App.css';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return( 
  <div>
    <Navs/>
  <Switch>
    <Route exact path="/">
        <Home/>
    </Route>
    <Route exact path="/starred">
   <Starred/>
    </Route>
    <Route >
      404 Not found
    </Route>

    </Switch>
    </div>
    );
}

export default App;
