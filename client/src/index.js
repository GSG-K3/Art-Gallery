import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/MaterialTheme'

ReactDOM.render(
  <MuiThemeProvider theme={theme()}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
)
