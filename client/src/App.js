
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtInfo from './Components/Layouts/ArtInfo/ArtInfo';
import SearchPage from './Components/Layouts/SearchPage/SearchPage';
import ShoppingCart from './Components/Layouts/ShoppingCart/ShoppingCart';
import Home from './Components/Layouts/HomePage/Home';
import Login from './Components/Layouts/Login/Login';
import Signup from './Components/Layouts/signUp/SignUp';
import Customize from './Components/Layouts/Customize/customize';
import UpladImage from './Components/Layouts/Customize/UploadImage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/art/:id' component={ArtInfo} />
        <Route exact path='/customize' component={Customize} />
        <Route exact path='/livePreview' component={UpladImage} />
        <Route exact path='/search' component={SearchPage} />
      </Switch>
    </Router>
  );
};

export default App;
