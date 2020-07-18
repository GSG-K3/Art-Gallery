import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtInfo from './Components/Layouts/ArtInfo/ArtInfo';

import Home from './Components/Layouts/HomePage/Home';
import Login from './Components/Layouts/Login/Login';
import Signup from './Components/Layouts/signUp/SignUp';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/art/:id' component={ArtInfo} />
      </Switch>
    </Router>
  );
};

export default App;
