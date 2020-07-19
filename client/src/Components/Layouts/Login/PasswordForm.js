import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from '../../../Theme/FormsStyles';

const PasswordForm = (props) => {
  const classes = useStyles();

  const {
    handlePasswordSubmit,
    errMessage,
    showPassword,
    password,
    withHandleChange,
    handleClickShowPassword,
    error,
  } = props;

  return (
    <form onSubmit={handlePasswordSubmit}>
      <FormControl className={classes.password} variant='outlined'>
        <InputLabel htmlFor='outlined-adornment-password'>
          كلمة المرور
        </InputLabel>
        <OutlinedInput
          error={error}
          id='outlined-adornment-password'
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={withHandleChange('password')}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                edge='end'
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={80}
        />
        {errMessage ? <p className={classes.message}> {errMessage} </p> : null}

        <Button
          onClick={handlePasswordSubmit}
          variant='contained'
          color='primary'
          className={classes.input}
        >
          دخول
        </Button>
      </FormControl>
    </form>
  );
};
export default PasswordForm;
