import React from 'react';
import  useStyles from './Style';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const Header = () => {
    const classes = useStyles();
return(

    <div className={classes.root}>
        <Toolbar >
          
          <Typography noWrap className={classes.title}>
            ART Gallery
          </Typography>
            <IconButton edge="start" className={classes.shopButton} color="#DADADA" aria-label="shop">
            <ShoppingCartIcon />
          </IconButton>

          
        </Toolbar>
    </div>
)

}
export default Header;
