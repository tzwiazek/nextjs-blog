import React from 'react';
import 'assets/styles/globalStyles.css';

const MyApp = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
