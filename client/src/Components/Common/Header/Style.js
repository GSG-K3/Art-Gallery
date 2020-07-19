import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#FFFFFF',
    fonFamily: 'SF Pro Display',
    maxWidth: 400,
    paddingLeft: 0,
    paddingRight: 0,
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    background: 'white',
  },
  shopButton: {
    color: '#DADADA',
    position: 'absolute',
    top: 6,
    right: 6,
  },
  bar: {
    position: 'sticky',
    top: 0,
    right: 0,
    left: 0,
  },
  title: {
    flexGrow: 1,
    color: '#000000',
    fontSize: 30,
    marginTop: 40,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  filterButton:{
    color: '#DADADA',
    position: 'absolute',
    top: 6,
    right: 50,
  },
}))
export default useStyles
