import '../styles/globals.css'
import Layout from '../components/layout'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function MyApp({ Component, pageProps }) {
  return( 
    <>
    <CssBaseline />
    <ThemeProvider theme={lightTheme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider></>
  )
}

export default MyApp
