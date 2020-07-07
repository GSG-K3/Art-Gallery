import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
    header: {
      position: 'relative',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
    },
    img: {
      height: 255,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%',
      borderRadius: 10,
    },
    text:{
      color:'white',
      fontSize:20,
      position: 'absolute',
      bottom: 30,
      left: 40,
    },
    stepperIcon:{
      background:'none',
      marginLeft:40,
      padding:0,
      position: 'absolute',
      bottom: 0,
      right: 1,
      maxWidth:400,
    }
  }));

  export default useStyles
