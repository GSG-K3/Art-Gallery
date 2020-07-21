import React from 'react';
import useStyles from './style';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [login, setlogin] = React.useState(false);

  const history = useHistory();

  const CheckLogin = () => {

    axios.get('/api/user-id')
      .then(result => {
        if (!result.data.success) {

          history.push('/login')
        }

        else {
          if (result.data.role === 'client') {
            return history.push('/cart')
          }
          return history.push(`/profile/${result.data.id}`)
        }


      })
      .catch()
  }

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          className={classes.iconClass}
          href='/'
          label='Home'
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          className={classes.iconClass}
          href='/search'
          label='Search'
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          className={classes.iconClass}
          label='You'
          onClick={CheckLogin}
          icon={<PersonIcon />}
        />
      </BottomNavigation>

    </div>


  );
};
export default NavBar;
