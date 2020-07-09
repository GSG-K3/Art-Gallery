import React from 'react'
import Slider from 'react-slick';
import {Button} from '@material-ui/core'
import '../../../../node_modules/slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import {Grid} from '@material-ui/core'
import useStyles from './Style'


const CategorisSlider =()=>{
  const classes = useStyles()
  const setting = {
    infinit: true,
    slidesToShow : 3,
    slidesToScroll : 2,
    variableWidth: true,
    arrows: false,
  };
return(
<div>
 <Grid className = {classes.root}>
  <Slider {...setting}  className = {classes.slide}>
  <div>
    <Button className = {classes.button} variant="outlined">ديجيتال</Button>
  </div>
  <div  >
  <Button className = {classes.button} variant="outlined" > لوحات </Button>
  </div>
  <div >
  <Button className = {classes.button} variant="outlined" >صور فوتوقرافية</Button>
  </div>
  <div >
  <Button className = {classes.button} variant="outlined">تطريز</Button> 
   </div>
  <div >
  <Button className = {classes.button} variant="outlined">حرف يدوية</Button> 
   </div>
  <div >
  <Button className = {classes.button} variant="outlined" >منحوتات</Button>  
  </div>
  </Slider>
  </Grid>

</div>
)
}

export default CategorisSlider
