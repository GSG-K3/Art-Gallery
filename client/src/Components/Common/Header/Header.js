import React, {useState, useEffect} from 'react';
import useStyles from './Style';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EditIcon from '@material-ui/icons/Edit';

import TuneIcon from '@material-ui/icons/Tune';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';


const Header = (props) => {
  const classes = useStyles();
  const [isLogin, setIsLogin ]=useState(null)
  const history = useHistory()
  const { pageName, HideIcon } = props;

  useEffect(() => {
    if(!isLogin){
      axios.get('/api/user-id')
        .then(result => {
          if(!result.data.success){
           return setIsLogin(null)
          }
          return setIsLogin(true)
        })
        .catch(err => err)
      }
  },[isLogin])

  const handelLogOut= ()=> {
    axios.post('/api/logout')
    .then(result =>{ 
      setIsLogin(null)
      history.push('/')})
    .catch(err => swal({
      title: 'حدث خطأ أثناء تسجيل الخروج يرجى المحاوله مره اخرى',
      icon: 'warning',
    }))
  }
  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography noWrap className={classes.title}>
          {pageName}
          {pageName === 'Search' ? (
            <IconButton
              edge='start'
              className={classes.filterButton}
              aria-label='filter'
            >
              <TuneIcon />
            </IconButton>
          ) : null}
        </Typography>

        {HideIcon ? null : (
          <IconButton
            edge='start'
            className={classes.shopButton}
            color='#DADADA'
            aria-label='shop'
            href='/cart'
          >
            <ShoppingCartIcon />
          </IconButton>
        )} 
        {isLogin && pageName!='Search' ?
        <IconButton
        edge='start'
        className={classes.filterButton}
        aria-label='logout'
        onClick={()=> handelLogOut()}
      >
      <MeetingRoomIcon />
      </IconButton> 
      :null}

        {pageName === 'Your Profile' ? (
          <IconButton
            edge='start'
            className={classes.shopButton}
            edge='start'
            color='#DADADA'
            aria-label='edit'
          >
            <EditIcon />
          </IconButton>
        ) : null}
      </Toolbar>
    </div>
  );
};
export default Header;