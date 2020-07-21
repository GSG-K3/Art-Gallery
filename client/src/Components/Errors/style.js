import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
   
    styleDiv:{
        display:'flex', 
        justifyContent: 'center',
        maxWidth:400,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign:'center',
    },
    text: {
        color:'#3c4036',
        fontSize:30,
    },
    number: {
        color:'#3c4036',
        fontSize:150,
    },
    imgStyle: {
        height:200,
        width:130,
    },
}))

export default useStyles
