/**
 * Primary palette
 *    Vodafone Red - #E60000
 *    Vodafone Grey - #4a4d4e
 *    Vodafone White - #FFFFFF
 * Secondary palette (50%, 25%)
 *    Red Violet - #9c2aa0
 *    Aubergine - #5e2750
 *    Aqua Blue - #00B0CA
 *    Turquoise - #007C92
 *    Spring Green - #A8B400
 *    Lemon Yellow - #FECB00
 *    Fresh Orange - #EB9700 
 * 
 *    Source: https://brand.vodafone.com/b/www/c/en-GB/BrandKnowledge/Guideline/1?Page=183
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


// Material UI Theme
const theme = createMuiTheme({
   palette: {
      primary: {
         main: '#E60000'
      },
      secondary: {
         main: '#4a4d4e',
      },
      error:{
         main: '#9c2aa0',
      }
   },
   status: {
      danger: 'orange',
   },
   typography: {
      useNextVariants: true,
    },
});

ReactDOM.render(
   <MuiThemeProvider theme={theme}>
      <App />
   </MuiThemeProvider>
   , document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));