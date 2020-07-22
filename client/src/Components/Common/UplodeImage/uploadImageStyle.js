import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  container: {
    padding: theme.spacing(5),
    position: 'relative',
    height: 250,
  },

  input: {
    display: 'none',
  },
  icon: {
    fontSize: 160,
    alignItems: 'center',
    padding: 0,
  },

  uploadContaner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  theImage: {
    padding: 27,
    zIndex: 9,
    width: 222,
    height: 168,
    textAlign: 'center',
    display: 'inline-block',
  },
  iconBox: {
    position: 'absolute',
    padding: theme.spacing(2),
    width: 300,
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    border: 3,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    borderRadius: 7,
  },
  buttonText: {
    fontSize: 20,
    color: '#6202EE',
  },
}));

export default useStyles;
