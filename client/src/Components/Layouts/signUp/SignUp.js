import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import useStyles from '../../../Theme/FormsStyles';
import axios from 'axios';
import SignUpForm from './SignUpForm';
import SecondHeader from '../../Common/SecondHeder/SecondHeader';

const Signup = () => {
  const classes = useStyles();

  const [next, setNext] = useState(true);
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState({
    showPassword: false,
    showRepeatPassword: false,
  });

  const handleClickShowPassword = () => {
    setShowPassword({
      ...showPassword,
      showPassword: !showPassword.showPassword,
    });
  };
  const handleClickShowRepeatPassword = () => {
    setShowPassword({
      ...showPassword,
      showRepeatPassword: !showPassword.showRepeatPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleNext = () => {
    setMessage(null)
    setNext(false);
  };
  const handleBack = () => {
    setNext(!next);
  };
  const checkAccount = (values) => {
    const email = values.email;
    axios
      .post('/api/checkAccount', { email })
      .then((result) => {
        setMessage('This Email is ' + result.data.status + ' and used Already');
      })
      .catch((err) => {
        if (err.response.data.status === 'notExist') handleNext();
      });
  };

  const handleSubmitt = async (values) => {
    await axios
      .post('/api/signup', { values })
      .then((result) => {
        setMessage(result.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.err);
      });
  };
  return (
    <Container className={classes.Container}>
      <Grid container direction='column' className={classes.root}>
        <SecondHeader pageName='SignUp' HideIcon='true' />

        <SignUpForm
          handleNext={handleNext}
          handleBack={handleBack}
          handleSubmitt={handleSubmitt}
          handleClickShowPassword={handleClickShowPassword}
          handleClickShowRepeatPassword={handleClickShowRepeatPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          message={message}
          next={next}
          showPassword={showPassword}
          checkAccount={checkAccount}
        />
        {next ? (
          <Link to='/login' className='text-link'>
            <p className={classes.text}>
              {' '}
              .Already have an account? Log in Now.
            </p>
          </Link>
        ) : null}
      </Grid>
    </Container>
  );
};
export default Signup;
