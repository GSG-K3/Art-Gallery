import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  icon: {
    fontSize: 200,
    alignItems: 'center'
  },

  uploadContaner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  theImage: {
    height: '50%',
    width: '50%',
    textAlign: 'center',
    display: 'inline-block'
  },
  iconBox: {
    padding : theme.spacing(2),
    display: 'flex',
    flexDirection : 'column',
    border : 3,
    borderStyle: 'solid',
    borderColor : theme.palette.primary.main,
    borderRadius : 7
  }
}))

export default useStyles
