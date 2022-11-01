import '../styles/globals.css'
import Layout from '../components/layout'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../utility/createEmotionCache';
import lightThemeOptions from '../utility/lightTheme';
import React from 'react';


const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const FocusOptical = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default FocusOptical;
