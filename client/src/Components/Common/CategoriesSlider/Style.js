import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 400,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    hieght: 10,
    margin: 4,
    color: '#000000',
    borderRadius: 50,
  },
  slide: {
    width: 350,
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
  },
}))

export default useStyles
