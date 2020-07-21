import React from 'react';
import Profile from './Components/Layouts/ProfileArtist/profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtInfo from './Components/Layouts/ArtInfo/ArtInfo';
import SearchPage from './Components/Layouts/SearchPage/SearchPage';
import Home from './Components/Layouts/HomePage/Home';
import Login from './Components/Layouts/Login/Login';
import Signup from './Components/Layouts/signUp/SignUp';
import Customize from './Components/Layouts/Customize/customize';
import UpladImage from './Components/Layouts/Customize/UploadImage';
import ShoppingCart from './Components/Layouts/ShoppingCart/ShoppingCart';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile/:id' component={Profile} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/art/:id' component={ArtInfo} />
        <Route exact path='/customize' component={Customize} />
        <Route exact path='/livePreview' component={UpladImage} />
        <Route exact path='/search' component={SearchPage} />
        <Route exact path='/cart' component={ShoppingCart} />
      </Switch>
    </Router>
  );
};

export default App;