import React, { Fragment, useState } from 'react'
import { TextField } from '@material-ui/core'
import axios from 'axios'
import UploadedImage from '../../Common/UplodeImage/uploadImage'
import useStyle from './addArtStyle'

const AddArt = () => {
  const classes = useStyle()
  const [imageUrl , setImageUrl] = useState(null)
  const getUrl = (url) =>{
    console.log(url , 'url from addArt')
   setImageUrl(url)
  }
  return (
    <div className={classes.root}>
      <UploadedImage getImageUrl = {getUrl}/>
      <form className={classes.inputsContaner}>
        <TextField
          className={classes.singleInput}
          id="outlined-helperText"
          label="art name"
          variant="outlined"
        />
        <TextField
          className={classes.singleInput}
          id="outlined-helperText"
          label="description"
          variant="outlined"
        />
        <TextField
          className={classes.singleInput}
          id="outlined-helperText"
          label="categories"
          variant="outlined"
        />
      </form>
    </div>
  )
}

export default AddArt
