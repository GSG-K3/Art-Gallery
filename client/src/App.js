import React from 'react';
import Home from './Components/Layouts/HomePage/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>  
  );
}

export default App;
