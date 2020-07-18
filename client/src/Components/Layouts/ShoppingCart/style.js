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
    },
    rootCard: {
      display: 'flex',
      justifyContent:'flex-end',
      marginBottom:10,
      height:100,
    },
    details: {
      display: 'flex',
      flexGrow:1,
      flexDirection: 'row',
      justifyContent:'space-between',
      maxWidth:300,
      alignContent:'center',
    },
    content: {
      textAlign:'right',
    },
    cover: {
      width: 64,
      height:64,
      margin:theme.spacing(2)
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingBottom: theme.spacing(1),
    },
  }))

  export default useStyles
  