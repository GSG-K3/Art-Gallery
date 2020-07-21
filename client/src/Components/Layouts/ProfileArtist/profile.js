
import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import useStyles  from './style';
import Navbar from '../../Common/Navbar/Navbar';
import ProfileHeader from './profileH'
import AddButton from './addButton'
import Tabs from './tab'
import Header from '../../Common/Header/Header'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

function Profile() {
  const classes = useStyles();
  const [artistValue, setArtistValue] = useState(null);
  const [clientId,setId] = useState(null);
  const history = useHistory()
  useEffect(() => {
    axios.get('/api/user-id')
        .then(result=> {
          if(!result.data.success){
           history.push('/login')
          } 

          else { 
            if(result.data.role === 'client'){
              history.push('/cart')
            }
         

                    if (!artistValue)  
                    { 
                      setId(result.data.id)
                      axios
                      .get(`/api/artist/${result.data.id}`)
                      .then((result) =>  setArtistValue(result.data))
                       
                      .catch((err) => err);


                    }
                    }
   
    
  
    }) 
  
    .catch(err=>swal({
      title: 'حدث خطأ في الخادم',
      icon: 'warning',
    }))

  }, [artistValue]);
  
  
  return (
    
    <Grid container direction='column' className={classes.root}>
      
      {artistValue?
     <div>
      
      <Header pageName='Your Profile'  />
      {artistValue? 
      <ProfileHeader  pageName='Your Profile'  artistName={artistValue}/>
    : null}
      <Tabs  artistName = {artistValue}  />
      <AddButton/>
      </div>
    : null }  
      <Navbar/>
      
      
    </Grid>
  );
}

export default Profile;
