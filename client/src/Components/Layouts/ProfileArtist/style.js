import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
      },
    addIcon:{
        padding:'10'
      },
    fab :{
        marginRight: theme.spacing(5),
        width:170,
        height:50,
        fontFamily: ' Roboto',
        fontSize: '18px',
        margin: theme.spacing(1),
        zIndex:1,
        marginLeft:200,
        backgroundColor:'#6202EE',
        borderRadius: 30,
        color:'white',
        fontSize:13,
        textTransform: 'none',
        marginBottom:70,
        
      },
    buttonDiv:{
        position:'fixed',
        bottom:10,
        zIndex:1,
      },
      addArtBtn: {
        textDecoration: 'none',
        color: 'white',
      },
   
}))

export default useStyles;
