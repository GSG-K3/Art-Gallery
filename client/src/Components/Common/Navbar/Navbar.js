import React from 'react'
import './style'
import useStyles from './style'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const NavBar = () => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

    return(
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction className={classes.iconClass} label='Home' icon={<HomeIcon  />} />
        <BottomNavigationAction className={classes.iconClass}  label='Search' icon={<SearchIcon />} />
        <BottomNavigationAction className={classes.iconClass}  label='Person' icon={<PersonIcon />} />
      </BottomNavigation>

    );
};
export default NavBar;