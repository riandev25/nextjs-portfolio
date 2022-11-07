import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Rian Miguel Engracia</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='../public/favicon_package/apple-touch-icon.png'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='../public/favicon_package/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='../public/favicon_package/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='../public/favicon_package/favicon-16x16.png'
        />
        <link
          rel='manifest'
          href='../public/favicon_package/site.webmanifest'
        />
        <link
          rel='mask-icon'
          href='../public/favicon_package/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#2d89ef' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
