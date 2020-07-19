import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
  formdiv: {
    display: 'flex',
      width: "100%",
      height: '80vh',
      flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
alignContent:'center',

  },
  Container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    margin:0 
  },
  input:{
width:'70vw',
maxWidth:'400px',
marginTop:theme.spacing(3),

  },
  message:{
    color: 'red',
    textAlign:'center',
    fontSize:'13px',
    marginTop:'5px'
  },
    margin: {
    margin: theme.spacing(3),
        width: '55vw',
        height:'36px',
        maxWidth:'270px',

  },
  password:{
    width:'70vw',
    maxWidth:'400px',

  },
  text:{
    textAlign:'center',

  }
 
}));

export default useStyles
