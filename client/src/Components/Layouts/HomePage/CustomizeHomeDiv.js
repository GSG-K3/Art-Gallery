import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import green from '@material-ui/core/colors/green'
import customizePhoto from './customize.png'
import useStyles from './style'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'

const CustomizeHomeDiv = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <div className={classes.customizeDiv}>
      <div className={classes.textDiv}>
        <ArrowBackIcon
          style={{ color: green[400] }}
          fontSize="large"
          onClick={() => history.push('/livePreview')}
        />
        <Typography variant="h6" className={classes.text}>
          اختر ما يناسب محيطك
        </Typography>
      </div>
      <Typography
        variant="body2"
        align="right"
        className={classes.text}
        color="textSecondary"
        component="p"
      >
        يمكنك تجربة لوحاتك المفضلة للتحقق من ملائمتها
      </Typography>
      <img
        src={customizePhoto}
        alt="customize art"
        style={{ marginTop: 15 }}
        onClick={() => history.push('/livePreview')}

      />
    </div>
  )
}

export default CustomizeHomeDiv
