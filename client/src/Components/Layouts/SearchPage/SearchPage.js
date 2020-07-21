import React, { useState, useEffect } from 'react';
import Header from '../../Common/Header/Header';
import Navbar from '../../Common/Navbar/Navbar';
import SearchIcon from '@material-ui/icons/Search';
import grey from '@material-ui/core/colors/grey';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import ArtCard from '../../Common/ArtCard/ArtCard';
import useStyles from './style';
import ServerErr from '../../Errors/ServerError'

const SearchPage = () => {
  const [searchValue, setValue] = useState('');
  const [art, setArt] = useState(null);
  const [errorFound,setError] = useState(null)
  const classes = useStyles();

  useEffect(() => {
    if (art) {
      return;
    }
    axios
      .get('/api/get-art')
      .then((result) => setArt(result.data))
      .catch((err) => setError(true));
  }, [art]);

  const filterSearch = () => {
    if (!searchValue) {
      return art;
    }
    return art.filter(
      (artwork) =>
        artwork.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        artwork.category.toLowerCase().includes(searchValue.toLowerCase())||
        artwork.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      {!errorFound ?
      <div>
      <Grid container className={classes.root}>
        <Header pageName='Search' />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon style={{ color: grey[700] }} />
          </div>
          <InputBase
            placeholder='Search'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleChange}
          />
        </div>
      </Grid>

      <div style={{ marginTop: 180, marginBottom: 80, zIndex: 0 }}>
        <Grid
          container
          direction='row'
          spacing={2}
          justify='space-around'
          className={classes.grow}
        >
          {art
            ? filterSearch().map((artwork) => {
                return (
                  <Grid item xs={6}>
                    <ArtCard
                      title={artwork.title}
                      artist={artwork.name}
                      imageUrl={artwork.photo_url}
                      cardKey={artwork.id}
                    />
                  </Grid>
                );
              })
            : null}
        </Grid>
      </div>
      <Navbar />
      </div>
      : <ServerErr />}
    </div>
  );
};

export default SearchPage;
