import React from 'react'
import FrameImg5 from './5-frame.jpg'
import useStyle from './style'



const ServerErr = () => {
    const classes=useStyle()
    return (
      <div>
        <div className={classes.styleDiv}>
            <img src={FrameImg5} alt='frame' className={classes.imgStyle} />
            <h1 className={classes.number} >00</h1>
        </div>
        <div className={classes.styleDiv}>
            <h4 className={classes.text} >INTERNAL SERVER ERROR</h4>
        </div>
      </div>
    )
}

export default ServerErr
