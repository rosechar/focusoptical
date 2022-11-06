import '../styles/globals.css'
import Layout from '../components/layout'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from "@mui/material";
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../utility/createEmotionCache';
import React from 'react';
import Head from 'next/head'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';



const clientSideEmotionCache = createEmotionCache();

const FocusOptical = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
    <CssVarsProvider defaultMode='system'>
      
    <Head>
        <title>Focus Optical - Rochester Hills Optometrist Eyeglass Shop</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
    </Head>

    
      
        
        <CssBaseline />
        <Layout>
        <Component {...pageProps} />
        </Layout>
      
    </CssVarsProvider>
    </CacheProvider>
  );
};

export default FocusOptical;
