import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/materialTheme'
import Home from './Components/Common/homePage/Home'

function App() {
  return (
    <MuiThemeProvider theme={theme()}>
    <div className="App">
     <Home/>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
