import React, {useState, useEffect} from 'react';
import useStyles from './Style';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TuneIcon from '@material-ui/icons/Tune';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';


const Header = (props) => {
  const classes = useStyles();
  const [isLogin, setIsLogin ]=useState(null)
  const { pageName } = props;
  const history = useHistory()

  useEffect(() => {
    if(!isLogin){
      axios.get('/api/user-id')
        .then(result => {
          if(!result.data.success){
            return
          }
          setIsLogin(true)
        })
        .catch(err => err)
    }
  },[isLogin])

  const handelLogOut= ()=> {
    axios.post('/api/logout')
    .then(result => history.push('/'))
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
        </Typography>
        {pageName === 'Search' ? (
          <IconButton
            edge='start'
            className={classes.filterButton}
            aria-label='filter'
          >
            <TuneIcon />
          </IconButton>
        ) 
        : isLogin||pageName!='Search' ?
        <IconButton
        edge='start'
        className={classes.filterButton}
        aria-label='logout'
        onClick={()=> handelLogOut()}
      >
      <MeetingRoomIcon />
      </IconButton> 
      :null}

        <IconButton
          edge='start'
          className={classes.shopButton}
          aria-label='shop'
          href='/cart'
        >
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </div>
  );
};
export default Header;
