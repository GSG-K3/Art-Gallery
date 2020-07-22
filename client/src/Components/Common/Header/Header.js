import React from 'react';
import useStyles from './Style';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EditIcon from '@material-ui/icons/Edit';

import TuneIcon from '@material-ui/icons/Tune';

const Header = (props) => {
  const classes = useStyles();
  const { pageName, HideIcon } = props;
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

        {pageName === 'Your Profile' ? (
          <IconButton
            edge='start'
            className={classes.editButton}
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