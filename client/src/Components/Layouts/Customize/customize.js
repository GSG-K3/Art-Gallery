import ReactDOM from 'react-dom';
import useDraggable from './useDraggable';
import { Grid, Box } from '@material-ui/core';
import useStyles from './style';
import SecondHeader from '../../Common/SecondHeder/SecondHeader';
import ServerErr from '../../Errors/ServerError';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';

const DraggableCard = ({ children }) => {
  const cardRef = useRef(null);
  useDraggable(cardRef);

  return (
    <Box className='card' ref={cardRef}>
      {children}
    </Box>
  );
};

export default function Customize(props) {
  const classes = useStyles();
  const [erroeFound, setError]= useState(null)
  let imagePreview = null;
  if (props.location.state !== undefined) {
    imagePreview = props.location.state.preview;
  }
  const [image, setImage] = useState(null);
  const [artwork, setArtwork] = useState(null);
  useEffect(() => {
    setImage(imagePreview);
    if (artwork) {
      return;
    }
    axios
      .get('/api/get-art')
      .then((result) => {
        let art = result.data.filter((art) => art.type === 'customize');
        setArtwork(art);
      })
      .catch((err) => setError(true));
  }, [artwork,erroeFound]);

  return (
    <Grid container direction='column'>
      {erroeFound ? 
      <ServerErr />:
    <div>
      <SecondHeader pageName='Live Preview' HideIcon='true' />
      <Box className={classes.mainDiv}>
        <Grid container direction='column'>
          <img src={image} alt='customize art' className={classes.mainDiv} />
        </Grid>
        <Grid container direction='row' spacing={2} justify='space-around'>
          {artwork ? (
            artwork.map((art) => {
              return (
                <Grid item xs={4}>
                  <DraggableCard>
                    <img className={classes.root} src={art.photo_url} />
                  </DraggableCard>
                </Grid>
              );
            })
          ) : (
            <div
              className={classes.root}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <CircularProgress style={{ color: green[400] }} />
            </div>
          )}
        </Grid>
      </Box>
      </div>}
    </Grid>
  );
}
