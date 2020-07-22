import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Container, Box, Grid } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import useStyles from '../../../Theme/FormsStyles';
import axios from 'axios';
import PasswordForm from './PasswordForm';
import SecondHeader from '../../Common/SecondHeder/SecondHeader';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const classes = useStyles();
  const isExist = 'Exist';
  const [error, setHasError] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const [accountStatus, setAccountStatus] = useState(null);
  const [isLogin, setlogin] = useState(null);
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  useEffect(() => {
    if (!isLogin) {
      axios
        .get('/api/user-id')
        .then((result) => {
          let id = result.data.id;
          if (!result.data.success) {
            setlogin(false);
            history.push('/login');
          } else {
            if (result.data.success) setlogin(true);

            if (result.data.role === 'client') {
              history.push('/');
            } else if (result.data.role === 'artist') {
              history.push({
                pathname: `/profile/${id}`,
                state: { ArtistId: id },
              });
            }
          }
        })
        .catch();
    }
  }, [isLogin]);

  const withHandleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setErrMessage(null);
    setHasError(false);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleDelete = () => {
    setAccountStatus(null);
    setErrMessage(null);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const email = values.email;
    axios
      .post('/api/checkAccount', { email })
      .then((result) => {
        setAccountStatus(result.data.status);
      })
      .catch((err) => {
        setErrMessage(err.response.data.message);
        setHasError(!error);
      });
  };

  const handlePasswordSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post('/api/login', { values })
      .then((result) => {
        setlogin(null);
      })
      .catch((err) => {
        setErrMessage(err.response.data.message);
        setHasError(!error);
      });
  };

  return (
    <Grid container direction='column' className={classes.root}>
      <SecondHeader pageName='Access' HideIcon='true' />

      <Container className={classes.Container}>
        {accountStatus !== isExist ? (
          <form
            onSubmit={handleSubmit}
            className={classes.formdiv}
            noValidate
            autoComplete='off'
          >
            <TextField
              error={error}
              className={classes.input}
              value={values.email}
              onChange={withHandleChange('email')}
              id='email'
              name='email'
              color='primary'
              autoFocus={true}
              margin={'dense'}
              required={true}
              label='البريد الإلكتروني'
              autoComplete='current-email'
              variant='outlined'
              helperText={errMessage}
            />
            <Box className={classes.message}>
              {errMessage ? (
                <Link to='/signup' className='text-link'>
                  <p> .New user? Create your account Here.</p>
                </Link>
              ) : null}

              <Button
                onClick={handleSubmit}
                variant='contained'
                color='primary'
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
                variant='outlined'
                onDelete={handleDelete}
              />
              <PasswordForm
                handlePasswordSubmit={handlePasswordSubmit}
                errMessage={errMessage}
                showPassword={values.showPassword}
                password={values.password}
                withHandleChange={withHandleChange}
                handleClickShowPassword={handleClickShowPassword}
                error={error}
              />
            </div>
          )}
      </Container>
    </Grid>
  );
};
export default Login;