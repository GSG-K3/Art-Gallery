import React from 'react';
import useStyles from './style';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

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
          label='الرئيسية'
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          className={classes.iconClass}
          href='/search'
          label='البحث'
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          className={classes.iconClass}
          label='أنت'
          onClick={() => history.push('/login')}
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </div>
  );
};
export default NavBar;