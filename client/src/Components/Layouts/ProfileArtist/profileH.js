import React from 'react';
import  useStyles from './profileHStyle';
import  useTheme from './profileHStyle';
import Rating from '@material-ui/lab/Rating';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
 

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
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


const Header = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const {pageName,artistName}=props
  
return(
    <div className={classes.root}>
        <div className={classes.div2}>
        <Avatar   className={classes.large} src="/broken-image.jpg" >
        </Avatar>
          <Box component="fieldset" mb={3} borderColor="transparent" >
        <div  className={classes.Rating}>
        <Typography component="legend" className={classes.artistName}>
          {artistName[0].name}
          </Typography>
        <Rating 
          color="#6202EE"
          name="simple-controlled"
          value={artistName[0].rate}
        />
        </div>
      </Box>
      
          </div>
          
    </div>

)

}
export default Header;
