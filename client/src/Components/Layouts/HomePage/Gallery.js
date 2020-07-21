import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import ArtCard from '../../Common/ArtCard/ArtCard';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';


const Gallery = () => {
  const classes = useStyles();
  const [artwork, setArtwork] = useState(null);
  const [errorFound,setError] = useState(null)
  useEffect(() => {
    if (artwork) {
      return;
    }
    axios
      .get('/api/get-art')
      .then((result) => setArtwork(result.data))
      .catch((err) => setError(true));
  }, [artwork]);
  return (
    <div>
      <div className={classes.galleryDiv}>
        <Typography variant='h6' align='right' className={classes.text}>
          المعرض الفني
        </Typography>
        <Typography
          variant='body2'
          align='right'
          className={classes.text}
          color='textSecondary'
          component='p'
        >
          اخر الاعمال الفنية المضافه لمعرضنا
        </Typography>
      </div>
      <Grid container direction='row' spacing={2} justify='space-around' className={classes.galleryDiv}>
        {errorFound ?
        <div className={classes.errorDiv} >
          <ErrorOutlineIcon className={classes.errorIcon} color='primary' />
        <Typography variant='h6' align='center' >
          حدث خطأ اثناء تحميل البيانات
          </Typography>
        </div>:
        artwork ? (
          artwork.map((art) => {
            return (
              <Grid item xs={6}>
                <ArtCard
                  title={art.title}
                  price={art.price}
                  imageUrl={art.photo_url}
                  cardKey={art.id}
                />
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
    </div>
  );
};

export default Gallery;
