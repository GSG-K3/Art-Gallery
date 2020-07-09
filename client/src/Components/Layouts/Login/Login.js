import React from "react";
import {TextField,Button,Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formdiv: {
    display: 'flex',
      margin: theme.spacing(3),
      width: "25ch",
      height: '100vh',
      flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
justifyItems:'center',
alignItems:'center',
alignContent:'center'

  },

  
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container  >

    <form className={classes.formdiv} noValidate autoComplete="off">
        <TextField
          id="email"
          name="email"
          color="main"
          autoFocus={true}
          margin={"dense"}
          required={true}
          label="Email"
          autoComplete="current-email"
          variant="outlined"
          width="70vw"
        />
      <div >
      <Button variant="contained" color="Primary">
        Next
      </Button>
    </div>

    </form>        </Container>


  );
}
