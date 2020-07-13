import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Categories from '../../Common/CategoriesSlider/CategoriesSlider';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import green from '@material-ui/core/colors/green';

const CategoriesHomeDiv = ()=> {
  const classes = useStyles();

  return (
    <div direction='column' className={classes.category}>
      <div className={classes.textDiv}>
        <ArrowBackIcon style={{ color: green[400] }} fontSize='large' />
        <Typography variant='h6' align='right' className={classes.text}>
          اكتشف الفن
        </Typography>
      </div>

      <Typography
        variant='body2'
        align='right'
        className={classes.text}
        color='textSecondary'
        component='p'
      >
        تصفح الاعمال الفنية حسب الفئة
      </Typography>
      <Categories />
    </div>
  );
}

export default CategoriesHomeDiv;
