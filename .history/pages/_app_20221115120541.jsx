import Head from 'next/head';
import { createContext } from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { ParallaxProvider } from 'react-scroll-parallax';

export const DrawerContext = createContext(null);

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Head>
        <title>Rian Miguel Engracia</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#2d89ef' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <DrawerContext.Provider value={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DrawerContext.Provider>
    </ParallaxProvider>
  );
}

export default MyApp;
