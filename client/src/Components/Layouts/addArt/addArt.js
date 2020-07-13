import React ,{Fragment , useState} from 'react'
import { TextField } from '@material-ui/core';
import axios from 'axios'
import UploadedImage from '../../Common/UplodeImage/uploadImage'


const AddArt = () =>{
  return (
    <div>
    <UploadedImage/>
    <form >
     <TextField
          id="outlined-helperText"
          label="art name"
          variant="outlined"
        />
    <TextField
          id="outlined-helperText"
          label="description"
          variant="outlined"
        />
    <TextField
          id="outlined-helperText"
          label="categories"
          variant="outlined"
        />
    </form>
    </div>
  )
}

export default AddArt