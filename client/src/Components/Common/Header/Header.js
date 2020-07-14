import React from 'react';
import  useStyles from './Style';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EditIcon from '@material-ui/icons/Edit';
import Profile from '../../Layouts/ProfileArtist/profile';


const Header = (props) => {
    const classes = useStyles();
    const {pageName}=props
return(
    <div className={classes.root}>
        <Toolbar >
          
          <Typography noWrap className={classes.title}>
            {pageName}
          </Typography>
            <IconButton edge="start" className={classes.shopButton} color="#DADADA" aria-label="shop">
            <ShoppingCartIcon />
          </IconButton>
          {pageName==="Your Profile"?
          <IconButton edge="start" className={classes.editButton}   edge="start" color="#DADADA" aria-label="edit">
            <EditIcon/>
          </IconButton> 
          :null
          }
          
        </Toolbar>
    </div>
)

}
export default Header;
