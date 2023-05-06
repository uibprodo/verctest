import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import localFont from '@next/font/local';

import '@/styles/globals.css';

const themeFonts = localFont({
  src: [
    {
      path: '../public/fonts/307BC1_0_0.woff2',
      weight: '300',
    },
    {
      path: '../public/fonts/Linotte-SemiBold-webfont.woff2',
      weight: '600',
    },
  ],
  variable: '--font-linotte',
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (_page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Prodoscore&trade; – Improve Sales Execution</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://qa03.prv-prodoscore.com/api/prod-icons.css"
        />
      </Head>
      <main className={`${themeFonts.variable} font-sans`}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </>
  );
}
