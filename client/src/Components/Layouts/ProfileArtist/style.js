import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        position:'sticky',
        zIndex:1,
        top:0,

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
          position:'sticky',
          marginLeft:200,
          backgroundColor:'#6202EE',
          borderRadius: 50,
          color:'white',
          fontSize:13,
          textTransform: 'none',
          marginBottom:70,
         


        },

        addArtBtn : {
          textDecoration : 'none',
          color : 'none'
        }
   
}))

export default useStyles;
