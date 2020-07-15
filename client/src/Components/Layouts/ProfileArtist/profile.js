
import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import useStyles  from './style';
import Navbar from '../../Common/Navbar/Navbar';
import ProfileHeader from './profileH'
import AddButton from './addButton'
import Tabs from './tab'
import Header from '../../Common/Header/Header'

function Profile() {
  const classes = useStyles();
  const [artistValue, setArtistValue] = useState(null);
  useEffect(() => {
    if (artistValue) {
      return;
    }
    axios
      .get('/api/artist/1')
      .then((result) =>  setArtistValue(result.data))
      .then ((result) =>  result)
      .catch((err) => rr);
  }, [artistValue]);
  
  
  return (
    <Grid container direction='column' className={classes.root}>
      <Header pageName='Your Profile'  />
      {artistValue? 
      <ProfileHeader  pageName='Your Profile'  artistName={artistValue}/>
    : null}
      <Tabs artistName={artistValue}/>
      <AddButton/>
      
      <Navbar/>
      
    </Grid>
  );
}

export default Profile;
