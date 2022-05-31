import type { NextComponentType } from 'next';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import React from 'react';
import '@/styles/globals.scss';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};
export default MyApp;
