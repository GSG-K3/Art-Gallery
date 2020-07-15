import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        position:'sticky',
        zIndex:1,
        top:0,

      },
      addButton:{
        margin: theme.spacing(1),
        zIndex:1,
        position:'sticky',
        marginLeft:230,
        backgroundColor:'#6202EE',
        borderRadius: 50,
        color:'white',
        fontSize:13,
        textTransform: 'none',

      },
    
   
}))

export default useStyles;
