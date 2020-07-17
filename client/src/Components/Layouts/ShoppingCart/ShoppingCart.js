import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import SecondHeader from '../../Common/SecondHeder/SecondHeader'
import useStyles from './style'

const ShoppingCart = () =>{
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <SecondHeader pageName='Shopping Cart' HideIcon={true} />
            <div className={classes.roundDiv} >
            </div>
            <BottomNavigation className={classes.buttonDiv}>
            <Typography variant="h6" align="center">
              انشئ متحفك الخاص
            </Typography>
            <Typography variant="body1" align="center">
              اجمع قطعك الفنيه المفضله لتشتريها لاحقا
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              href='/'
            >
              تصفح الاعمال الفنية
            </Button>
          </BottomNavigation>
        </div>
    )
}

export default ShoppingCart
