import { createMuiTheme } from '@material-ui/core/styles';


const theme = ()=> createMuiTheme({
  palette: {
    primary: {
      main: '#6202EE',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography:{
    fontFamily:`'Mirza', cursive`,
  },
});

export default theme

