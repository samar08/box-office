import React from 'react';
import {Switch,Route} from 'react-router-dom'


import './App.css';

function App() {
  return( <Switch>
    <Route exact path="/">
         This is home page
    </Route>
    <Route exact path="/contacts">
      This is contacts page
    </Route>
    <Route >
      404 Not found
    </Route>

    </Switch>);
}

export default App;
