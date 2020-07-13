import React from 'react';
import Home from './Components/Layouts/HomePage/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddArt from './Components/Layouts/addArt/addArt'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path = '/addart' component = {AddArt}/>
      </Switch>
    </Router>  
  );
}

export default App;
