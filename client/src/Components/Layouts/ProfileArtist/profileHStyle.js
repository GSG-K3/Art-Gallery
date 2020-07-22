import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        color: '#FFFFFF',
        fonFamily: 'SF Pro Display',
        maxWidth:400,
        paddingLeft:0,
        paddingRight:0,
        position:'sticky',
        top:0,
        left:0,
        right:0,
        zIndex:1,
        background:'white',
      },
      
      shopButton: {
        color: '#DADADA',
        position:'absolute',
        top:6,
        right:6,
        marginLeft: theme.spacing(5),    
      },
      editButton: {
        color: '#DADADA',
        position:'absolute',
        top:6,
        right:6,
       marginRight:theme.spacing(3),
       marginBottom:5,    
      },
      large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginLeft:theme.spacing(2),
        backgroundColor:'#D7B7FD',
        marginBottom:theme.spacing(4),
        boxShadow: '2px 2px #6202EE',
      },
      artistName:{
        color: '#000000',
        fontFamily: 'Roboto',
        fontSyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',        
      },
      Paper:{
        position:"sticky",
        zIndex:1,
        flexGrow: 1,
        width: 420, 
        backgroundColor: theme.palette.background.paper,
        marginBottom:30,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column", 
      },
      div2:{
        display: 'flex',
        textAlign:'center',
        alignItems: 'center',
      },
      editDiv:{
          marginBottom:theme.spacing(2),         
      },
      title: {
        flexGrow: 1,
        color: '#000000',
        fontSize:30,
        marginTop:40,
        marginBottom:10,
        fontWeight:'bold'
      },
}))
export default useStyles;
