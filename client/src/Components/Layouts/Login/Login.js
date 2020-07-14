import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Box,
  Grid
} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import useStyles from "../../../Theme/FormsStyles";
import axios from "axios";
import PasswordForm from './PasswordForm'
import Header from '../../Common/Header/Header'


  const Login = () => {

  const classes = useStyles();
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const [accountStatus, setAccountStatus] = useState(null);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setErrMessage(null);
    setError(false)
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleDelete = () => {
    setAccountStatus(null);
    setErrMessage(null);

  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const email = values.email;
    axios
      .post("/api/checkAccount", { email })
      .then((result) => {
        setAccountStatus(result.data.status);
        
      })
      .catch((err) => {setErrMessage(err.response.data.message)
       setError(!error);
      });

  };


  const handlePasswordSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("/api/login", { values })
      .then((result) => {
        console.log("result.status", result.data.message);
      })
      .catch((err) => {setErrMessage(err.response.data.message)
        setError(!error);
      });

  };

  return (

    <Container className={classes.Container}>
    <Grid container direction="column" className={classes.root}>

              <Header pageName="LogIn" />

      {accountStatus !== "Exist" ? (
        <form
          onSubmit={handleSubmit}
          className={classes.formdiv}
          noValidate
          autoComplete="off"
        >
          <TextField
            error={error}
            className={classes.input}
            value={values.email}
            onChange={handleChange("email")}
            id="email"
            name="email"
            color="primary"
            autoFocus={true}
            margin={"dense"}
            required={true}
            label="البريد الإلكتروني"
            autoComplete="current-email"
            variant="outlined"
            helperText={errMessage}

          />
          <Box className={classes.message}>
            {errMessage ? (
              <Link to='/signup' className='text-link'>
             <p > .New user? Create your account Here.</p>

            </Link>
            ) : null}

            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              className={classes.input}
            >
              التالي
            </Button>
          </Box>
        </form>
      ) : (
        <div className={classes.formdiv}>
          <Chip
            className={classes.margin}
            icon={<MailOutlineIcon />}
            label={values.email}
            variant="outlined"
            onDelete={handleDelete}
          />
          <PasswordForm
            handlePasswordSubmit = {handlePasswordSubmit}
            errMessage = {errMessage}
            showPassword = {values.showPassword}
            password = {values.password}
            handleChange = {handleChange}
            handleClickShowPassword = {handleClickShowPassword}
            handleMouseDownPassword = {handleMouseDownPassword}
            error={error}
          />
        </div>
      )} </Grid>
    </Container>             

  );
}
export default Login;
