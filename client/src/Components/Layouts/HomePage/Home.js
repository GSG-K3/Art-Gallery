import React from 'react'
import { Grid } from '@material-ui/core'
import RecentArtSlider from '../../Common/RecentArtSlider/RecentArtSlider'
import Header from '../../Common/Header/Header'
import CategoriesHomDiv from './CategoriesHomeDiv'
import CustomizeHomeDiv from './CustomizeHomeDiv'
import Gallery from './Gallery'
import useStyles from './style'
import Navbar from '../../Common/Navbar/Navbar'

const Home = () => {
  const classes = useStyles()

  return (
    <Grid container direction="column" className={classes.root}>
      <Header pageName="ART GALLERY" />
      <RecentArtSlider />
      <CategoriesHomDiv />
      <CustomizeHomeDiv />
      <Gallery />
      <Navbar />
    </Grid>
  )
}

export default Home
