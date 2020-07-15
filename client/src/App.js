import React from 'react';
import Home from './Components/Layouts/HomePage/Home'
import Profile from './Components/Layouts/ProfileArtist/profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ArtInfo from './Components/Layouts/ArtInfo/ArtInfo'

const App = ()=> {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile/:id' component={Profile} />
        <Route exact path='/art/:id' component={ArtInfo} />
      </Switch>
    </Router>  
  );
}

export default App;