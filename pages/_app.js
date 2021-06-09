import React, { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import PropTypes from 'prop-types';
// import Layout from '../components/Layout';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

// import '../styles/globals.css'
// import Layout from '../components/Layout'

// function MyApp({ Component, pageProps }) {
//   return(
//     <Layout><Component {...pageProps} /></Layout>
//     )
// }

export default MyApp;