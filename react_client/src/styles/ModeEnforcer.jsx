import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';

const mainTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const ModeEnforcer = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

ModeEnforcer.propTypes = {
  children: PropTypes.any,
};

export default ModeEnforcer;
