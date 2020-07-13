import React from 'react';
import Home from './Components/Layouts/HomePage/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ArtInfo from './Components/Layouts/ArtInfo/ArtInfo'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/art/:id' component={ArtInfo} />
      </Switch>
    </Router>  
  );
}

export default App;
