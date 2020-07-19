import { fade, makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles((theme) => ({
    root:{
      position: 'fixed',
      zIndex:1,
      backgroundColor: 'white',
      maxWidth: 400,
  
    },
    grow: {
      flexGrow: 1,
      maxWidth: 400,
     
    },
    search: {
      backgroundColor: 'white',
      position: 'fixed',
      top:100,
      marginBottom:20,
      borderRadius: theme.shape.borderRadius,
      '&:selected': {
        backgroundColor: fade(theme.palette.common.white),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
    },
    inputRoot: {
      color: 'inherit',
      backgroundColor: grey[300],
      '&:selected': {
        backgroundColor: fade(theme.palette.common.white),
      },
      borderRadius: 10,
      maxWidth: 400,
      margin: 10,
      marginRight:30,
      position: 'sticky',
      top: 0,
      display:'flex',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
      
  }))
  export default useStyles