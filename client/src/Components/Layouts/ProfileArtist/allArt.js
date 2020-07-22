import React, { useEffect, useState } from 'react';
import useStyles from './style';
import ArtCard from '../../Common/ArtCard/ArtCard';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';

const AllArt = (props) => {
  const classes = useStyles();

  const { artwork } = props;

  return (
    <div>
      <Grid container direction='row' spacing={2} justify='space-around'>
        {artwork ? (
          artwork.map((art) => {
            return (
              <Grid item xs={6}>
                <ArtCard
                  title={art.titel}
                  category={art.category}
                  imageurl={art.photo_url}
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

export default AllArt;