import React from "react";
import { Grid } from "@material-ui/core";
import RecentArtSlider from "../RecentArtSlider/RecentArtSlider";
import Header from "../Header/Header";
import CategoriesHomDiv from "./categoriesHomeDiv";
import CustomizeHomeDiv from './customizeHomeDiv'
import Gallery from './Gallery'
import useStyles from "./style";


function Home() {
  const classes = useStyles();
  
  return (
    <Grid container direction="column" className={classes.root}>
      <Header />
      <RecentArtSlider />
      <CategoriesHomDiv />
      <CustomizeHomeDiv />
      <Gallery />
    </Grid>
  );
}

export default Home;
