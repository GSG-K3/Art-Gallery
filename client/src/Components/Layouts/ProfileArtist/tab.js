import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useStyles from './profileHStyle';
import useTheme from './profileHStyle';
import { Grid, Typography, Box, Paper, Tabs, Tab } from '@material-ui/core';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import ArtCard from '../../Common/ArtCard/ArtCard';
import AllArt from './allArt';
import addArtImage from './addArt.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const AllTab = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { pageName, artistName } = props;

  const [valueTab, setValueTab] = React.useState(2);

  const handleChangeTab = (event, newValueTab) => {
    setValueTab(newValueTab);
  };
  const handleChangeIndex = (index) => {
    setValueTab(index);
  };
  const [artwork, setArtwork] = useState(null);
  useEffect(() => {
    if (artwork) {
      return;
    }

    axios
      .get(`/api/all-art-artist/${artistName[0].id}`)
      .then((result) => {
        if (result.data.length > 0) {
          setArtwork(result.data);
        }
      })
      .catch((err) => console.log(err));
  }, [artwork]);
  return (
    <div>
      {artwork ? (
        <div className={classes.Paper}>
          <Paper square>
            <Tabs
              value={valueTab}
              onChange={handleChangeTab}
              indicatorColor='primary'
              textColor='primary'
              variant='fullWidth'
              centered
            >
              <Tab label='كل القطع الفنية' {...a11yProps(0)} />

              <Tab label='القابل للتعديل فقط' {...a11yProps(1)} />
            </Tabs>
          </Paper>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={valueTab}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={valueTab} index={0} dir={theme.direction}>
              <AllArt artwork={artwork} />
            </TabPanel>
            <TabPanel value={valueTab} index={1} dir={theme.direction}>
              <Grid
                container
                direction='row'
                spacing={2}
                justify='space-around'
              >
                {artwork
                  ? artwork

                      .filter((art) => art.type.includes('customize'))
                      .map((filteredName) => (
                        <Grid item xs={6}>
                          <ArtCard
                            title={filteredName.title}
                            price={filteredName.price}
                            imageUrl={filteredName.photo_url}
                            cardKey={filteredName.id}
                          />
                        </Grid>
                      ))
                  : null}
              </Grid>
            </TabPanel>
          </SwipeableViews>
        </div>
      ) : (
        <div className={classes.imageDiv}>
          <img
            className={classes.addArtImage}
            src={addArtImage}
            alt='addArtImage'
            style={{ marginLeft: 40, marginTop: 180, width: 300 }}
          />
        </div>
      )}
    </div>
  );
};
export default AllTab;
