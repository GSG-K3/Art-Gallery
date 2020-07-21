import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  category: {
    marginBottom: 30,
    marginTop: 20,
  },
  text: {
    marginRight: 20,
  },
  textDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  galleryDiv:{
    maxWidth:400,
    // flexGrow:1,
    marginBottom:80,
  },
  galleryTextDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    marginBottom: 30,
  },
  customizeDiv: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 30,
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
    marginLeft:theme.spacing(13),
  }

}))

export default useStyles
