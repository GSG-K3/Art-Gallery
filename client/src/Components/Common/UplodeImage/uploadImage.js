import React, { Fragment, useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
// import RaisedButton from 'material-ui/core/RaisedButton';
import { Button } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import axios from 'axios'
import useStyles from './uploadImageStyle'
import {Box} from '@material-ui/core'
import {Grid} from '@material-ui/core'

const UploadImage = ({getImageUrl}) => {
  const classes = useStyles()
  const [image, addImage] = useState('')
  const [imageName, addImageName] = useState('choose file')
  const [uploadedImage, setUploadedImage] = useState('')

  const handaleImage = async (e) => {
    addImage(e.target.files[0])
    addImageName(e.target.files[0].name)
    console.log(e.target.files[0])
    //for backend it's a js thing it construct a set of key and value representing form fields and their values
    const formData = new FormData()
    formData.append('Image', e.target.files[0])
    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'content-Type': 'multipart/form-data',
        },
      })

      const { url } = res.data

      setUploadedImage(url)
      if (getImageUrl){
        getImageUrl(url)
      }
      console.log(url)
    } catch (err) {
      if (err.response.status === 500) {
        console.log('there was a problem with the server')
      } else {
        console.log(err.response.data.msg)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const displayStatus = !uploadedImage ? 'none' : 'block';
  return (
    <Fragment className={classes.root}>
      <form onSubmit={handleSubmit} className = {classes.uploadContaner}>
        <input
          className={classes.input}
          type="file"
          id="icon-button-file"
          name="img"
          accept="image/*"
          onChange={handaleImage}
        />
        <Grid alignItems = 'center' justify = 'center' item direction = 'column' containe className = {classes.iconBox}>
        <label htmlFor="icon-button-file">
          <IconButton
            aria-label="upload picture"
            component="span"
            color="primary"
          >
            <AddIcon className={classes.icon} />
          </IconButton>
        </label>
        <lable>{imageName}</lable>
          </Grid>
        <Button className = {classes.input} type="submit" label="submit" color="primary">
          submit
        </Button>
      </form>
      <Box component = 'div' display = {displayStatus}>
      <Grid alignItems = 'center' justify = 'center' item container>
      <img className = {classes.theImage} src={uploadedImage} />
      </Grid>
      </Box>
    </Fragment>
  )
}

export default UploadImage
