import React from 'react'
import FrameImg from './0-with-frame.jpg'
import useStyle from './style'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
    const classes=useStyle()
  const history = useHistory()

    return (
        <div>
             <ArrowBackIcon
          fontSize="large"
          onClick={() => history.goBack()}
        />
            <div className={classes.styleDiv}>
            <h1 className={classes.number} >4</h1>
            <img src={FrameImg} alt='frame' className={classes.imgStyle} />
            <h1 className={classes.number} >4</h1>
            </div>
            <div className={classes.styleDiv} >
                <h4 className={classes.text} >Page Not Found</h4>
            </div>
        </div>
    )
}

export default NotFound
