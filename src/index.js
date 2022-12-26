import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#E52828',
    },
    secondary: {
      main: '#FFD3D3',
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
