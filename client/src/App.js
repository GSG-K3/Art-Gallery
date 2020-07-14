import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Components/Common/homePage/Home'
import Login from './Components/Layouts/Login/Login'
import Signup from './Components/Layouts/signUp/SignUp'
import RecentArtSlider from './Components/Common/RecentArtSlider/RecentArtSlider'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={RecentArtSlider} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>

      </Router>
  );
}

export default App;
