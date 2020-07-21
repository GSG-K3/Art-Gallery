import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 100,
    maxHeight: 130,
  },
  mainDiv: {
    maxWidth: 400,
    marginTop: 15,
    marginBottom: 60,
  },

  category: {
    marginBottom: 30,
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
  },
  textDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  galleryDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    marginBottom: 30,
  },
  customizeDiv: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 30,
  },
  formdiv: {
    display: 'flex',
    width: '100%',
    height: '80vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  Container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
  },
  input: {
    width: '344px',
    height: '83px',
    maxWidth: '95vw',
    marginTop: theme.spacing(3),
    display: 'flex-end',
    flexDirection: 'row-reverse',

    justifyContent: 'space-around',
    boxShadow:
      ' 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)',
  },
}));

export default useStyles;
