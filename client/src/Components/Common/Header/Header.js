import React from 'react'
import useStyles from './Style'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import TuneIcon from '@material-ui/icons/Tune'

const Header = (props) => {
  const classes = useStyles()
  const { pageName } = props
  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography noWrap className={classes.title}>
          {pageName}
        </Typography>
        {pageName === 'Search' ? (
          <IconButton
            edge="start"
            className={classes.filterButton}
            aria-label="filter"
          >
            <TuneIcon />
          </IconButton>
        ) : null}

        <IconButton
          edge="start"
          className={classes.shopButton}
          aria-label="shop"
          href='/cart'
        >
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </div>
  )
}
export default Header
