import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(4),
      borderRadius: 50,
    },
    roundDiv: {
      maxWidth: 400,
      borderRadius:'50%',
      backgroundColor:'#DADADA',
      width:200,
      height:200,
      margin:theme.spacing(12),
      display:'flex',
      justifySelf:'center',
    },
    root: {
      maxWidth: 400,
      flexGrow:1,
    },
    buttonDiv:{
        display:'flex',
        flexDirection:'column',
        margin:theme.spacing(10),
    }
  }))

  export default useStyles
  