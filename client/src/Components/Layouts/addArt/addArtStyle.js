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
    margin: theme.spacing(1),
    width: 300,
  },
  descriptionInput: {
    margin: theme.spacing(1),
    width: 300,
  },
  customiseDiv: {
    display: 'flex',
    flexDirection: 'row-reverse',
    width: 300,
    justifyContent: 'space-between',
  },
  switch: {
    marginTop: 9,
  },
  customiseText: {
    marginTop: 0,
    color: '#606060',
    width: 300,
  },

  lastInput: {
    margin: theme.spacing(1),
    width: 300,
  },
  inputText: {
    paddingLeft: 35,
  },
  submitBtn: {
    width: 300,
  },
  customizeTitle : {
    fontSize : 22,
  },
  supmitLink : {
    textDecoration: 'none',
    color: 'white',
  }
}));

export default useStyle;
