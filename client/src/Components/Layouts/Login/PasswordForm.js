import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useStyles from "../../../Theme/FormsStyles";

export default function PasswordForm(props) {


const classes = useStyles();

const { handlePasswordSubmit, errMessage , showPassword , password,
handleChange , handleClickShowPassword, handleMouseDownPassword 
, error} = props

  return(


    <form onSubmit={handlePasswordSubmit}>
    <FormControl className={classes.password} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        كلمة المرور
      </InputLabel>
      <OutlinedInput
        error={error}
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChange("password")}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
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
        variant="contained"
        color="primary"
        className={classes.input}
      >
        دخول
      </Button>
    </FormControl>
  </form>


  )
}
