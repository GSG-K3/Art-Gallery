import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Grid } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
      <Grid container direction="column">
        <App />
      </Grid>
  </React.StrictMode>,
  document.getElementById('root')
)
