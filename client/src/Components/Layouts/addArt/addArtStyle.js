import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  inputsContaner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  singleInput: {
    padding: 5,
    width : 300
  },
}));

export default useStyle;
