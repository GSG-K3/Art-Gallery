import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Typography from '@material-ui/core/Typography'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import IconButton from '@material-ui/core/IconButton'
import useStyle from './style'
import { useHistory } from 'react-router-dom'

const SecondHeader = (props) => {
  const { pageName,HideIcon } = props
  const classes = useStyle()
  const history = useHistory()

  return (
    <div className={classes.root}>
      <div className={classes.titelDiv}>
        <ArrowBackIcon
          fontSize="large"
          onClick={() => history.goBack()}
        />
        <Typography variant="h6" className={classes.title}>
          {pageName}
        </Typography>
      </div>
      {HideIcon ? null
      :
      <IconButton
        edge="start"
        aria-label="shop"
        className={classes.shopButton}
        href='/cart'
      >
        <ShoppingCartIcon />
      </IconButton>
      }
    </div>
  )
}

export default SecondHeader
