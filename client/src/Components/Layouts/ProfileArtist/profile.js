import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import useStyles from './style';
import Navbar from '../../Common/Navbar/Navbar';
import ProfileHeader from './profileH';
import AddButton from './addButton';
import Tabs from './tab';
import Header from '../../Common/Header/Header';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import SecondHeader from '../../Common/SecondHeder/SecondHeader';

const Profile = (props) => {
  const classes = useStyles();
  const [artistValue, setArtistValue] = useState(null);
  let id = null;
  let idApi = null;
  let idArtist = null;
  if (props.location.state) {
    idArtist = props.location.state.idArtist;
    id = props.location.state.ArtistId;
  }
  if (idArtist) {
    idApi = idArtist;
  } else idApi = id;

  useEffect(() => {
    if (!artistValue || idApi) {
      axios
        .get(`/api/artist/${idApi}`)
        .then((result) => setArtistValue(result.data))

        .catch((err) => err);
    }
  }, [idApi]);

  return (
    <Grid container direction='column' className={classes.root}>
      {artistValue ? (
        <div>
          {idApi === id ? (
            <Header pageName='حسابك' HideIcon={true} />
          ) : (
            <SecondHeader pageName= "معرض الفنان" HideIcon='true' />
          )}

          {artistValue ? (
            <ProfileHeader pageName='حسابك' artistName={artistValue} />
          ) : null}
          <Tabs artistName={artistValue} />
          {idApi === id ?
          <div className={classes.buttonDiv}>
           <AddButton  pathId={idApi} /> 
           </div>
           : null}
        </div>
      ) : null}
      <div className={classes.buttonDiv} >
      <Navbar />
      </div>
    </Grid>
  );
};

export default Profile;
