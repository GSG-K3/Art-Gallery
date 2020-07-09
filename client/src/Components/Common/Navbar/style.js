import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: 400,
   position: 'sticky',
        bottom:0,
        left:0,
        right:0,
      },
    iconClass:{
      color: '#DADADA',
    },
        '&:hover': {
            color: '#6202EE',
        },
}))
export default useStyles;