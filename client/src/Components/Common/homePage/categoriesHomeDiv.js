import React from 'react'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Categories from "../categoriesSlider/CategoriesSlider";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import green from "@material-ui/core/colors/green";



function CategoriesHomeDiv (){
    const classes = useStyles();

    return(

        <Grid container direction="column" className={classes.category}>
        <div className={classes.textDiv} >
        <ArrowBackIcon style={{ color: green[400] }} fontSize="large" />
        <Typography variant="h6" align="right" className={classes.text}>
            اكتشف الفن
        </Typography>
        </div>

        <Typography variant="p" align="right" className={classes.text}>
        تصفح الاعمال الفنية حسب الفئة
        </Typography>
        <Categories />
        </Grid>
    )

}

export default CategoriesHomeDiv
