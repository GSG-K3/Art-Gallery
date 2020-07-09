import React, { useState } from "react";
import {TextField,Button,Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  formdiv: {
    display: 'flex',
      width: "100%",
      height: '100vh',
      flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
alignContent:'center',

  },
  Container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
  },
  input:{
width:'70vw',
maxWidth:'400px',
marginBottom:theme.spacing(3),

  }
  
}));

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [error , setError] = React.useState(null)

  function handleNameChange(e){
    setEmail(e.target.value)
}


  const handleSubmit = (evt) => {
    evt.preventDefault();
    //alert(`Submitting Name ${email}`)

    axios
      .post("/api/checkAccount", {email})
      .then((result) => {
       console.log('result.status',result.data.success);
        
      })
      .catch((err) => console.log(err.response.data.message )
      );

    setEmail('')

}


  return (
    <Container className={classes.Container}  >

    <form onSubmit={handleSubmit} className={classes.formdiv} noValidate autoComplete="off">
        <TextField
          className={classes.input}
          value={email}
          onChange={handleNameChange}
          id="email"
          name="email"
          color="main"
          autoFocus={true}
          margin={"dense"}
          required={true}
          label="Email"
          autoComplete="current-email"
          variant="outlined"
        />
      <div  >
      <Button onClick={handleSubmit} variant="contained"  color="primary" className={classes.input}>
        Next
      </Button>
    </div>

    </form>     
    </Container>


  );
}
