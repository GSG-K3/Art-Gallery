import React from 'react';
import {
  TextField,
  Button,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from '../../../Theme/FormsStyles';
import { Formik } from 'formik';
import SignupSchema from '../helper/SignUpValidation';

const SignUpForm = (props) => {
  const classes = useStyles();
  const {
    next,
    handleNext,
    handleBack,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleSubmitt,
    message,
    handleClickShowRepeatPassword,
    showPassword,
    checkAccount,
  } = props;

  return (
    <Formik
      className={classes.formdiv}
      initialValues={{
        name: '',
        email: '',
        phone: '',
        password: '',
        repeatPassword: '',
        role: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        checkAccount(values);
        if (!next) handleSubmitt(values);
      }}
    >
      {({ errors, handleChange, handleSubmit, touched, values }) => (
        <form onSubmit={handleSubmit} className={classes.formdiv}>
          {next ? (
            <Container className={classes.Container}>
              <TextField
                className={classes.input}
                error={errors.name && touched.name}
                onChange={handleChange}
                id='name'
                name='name'
                value={values.name}
                color='primary'
                autoFocus={true}
                margin={'dense'}
                required={true}
                label='الاسم'
                autoComplete='current-name'
                variant='outlined'
                helperText={errors.name && touched.name ? errors.name : null}
              />

              <TextField
                className={classes.input}
                error={(errors.email && touched.email) || Boolean(message)}
                onChange={handleChange}
                id='email'
                name='email'
                value={values.email}
                color='primary'
                autoFocus={true}
                margin={'dense'}
                required={true}
                label='البريد الإلكتروني'
                autoComplete='current-email'
                variant='outlined'
                helperText={
                  errors.email && touched.email ? errors.email : message
                }
              />

              <TextField
                className={classes.input}
                error={errors.phone && touched.phone}
                onChange={handleChange}
                id='phone'
                name='phone'
                value={values.phone}
                color='primary'
                autoFocus={true}
                margin={'dense'}
                required={true}
                label='رقم الهاتف '
                autoComplete='current-phone'
                variant='outlined'
                helperText={errors.phone && touched.phone ? errors.phone : null}
              />
            </Container>
          ) : (
            <Container className={classes.Container}>
              <FormControl className={classes.input} variant='outlined'>
                <InputLabel htmlFor='outlined-adornment-password'>
                  كلمة المرور
                </InputLabel>

                <OutlinedInput
                  id='password'
                  required={true}
                  type={showPassword.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={80}
                />
              </FormControl>

              <FormControl className={classes.input} variant='outlined'>
                <InputLabel htmlFor='outlined-adornment-password'>
                  تاكيد كلمة المرور
                </InputLabel>
                <OutlinedInput
                  id='repeatPassword'
                  required={true}
                  type={showPassword.showRepeatPassword ? 'text' : 'password'}
                  value={values.repeatPassword}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle repeatPassword visibility'
                        onClick={handleClickShowRepeatPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword.showRepeatPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={120}
                />
              </FormControl>

              <FormControl className={classes.input} component='fieldset'>
                <FormLabel component='legend'>Buying or Selling?</FormLabel>
                <RadioGroup
                  aria-label='role'
                  name='role'
                  onChange={handleChange}
                  value={values.role}
                >
                  <FormControlLabel
                    value='client'
                    control={<Radio required={true} color='primary' />}
                    label='Buying art'
                  />
                  <FormControlLabel
                    value='artist'
                    control={<Radio required={true} color='primary' />}
                    label='Selling art'
                  />
                </RadioGroup>
              </FormControl>

              {message ? <p className={classes.message}> {message} </p> : null}
            </Container>
          )}

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.input}
          >
            {next ? 'التالي' : 'تسجيل'}
          </Button>

          {next ? null : (
            <Button
              onClick={handleBack}
              variant='contained'
              color='primary'
              className={classes.input}
            >
              السابق
            </Button>
          )}
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
