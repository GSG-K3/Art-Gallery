import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    position: 'absolute',
    bottom: 30,
    left: 40,
  },
  button: {
    background: 'none',
    position: 'absolute',
    bottom: 23,
    right: 1,
  },
  errorDiv:{
    marginTop:0,
    marginBottom:100,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
  },
  errorIcon:{
    margin:theme.spacing(6),
    fontSize:50,
    marginLeft:theme.spacing(20),
  },
}))

export default useStyles
