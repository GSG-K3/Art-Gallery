import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddArt from './Components/Layouts/addArt/addArt'


const App = ()=> {
  return (
    <Router>
      <Switch>
        <Route path = '/addart' component = {AddArt}/>
      </Switch>
    </Router>  
  );
}

export default App;
