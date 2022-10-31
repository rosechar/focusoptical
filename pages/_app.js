import '../styles/globals.css'
import Layout from '../components/layout'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import React from 'react';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function FocusOptical({ Component, pageProps }) {
  return( 
    <React.Fragment>
      <ThemeProvider theme={lightTheme}>
      <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default FocusOptical
