import Head from 'next/head';
import Link from 'next/Link';
import '../styles/globals.css';
import 
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Rian Miguel Engracia</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <Link
          rel='apple-touch-icon'
          sizes='180x180'
          href='../public/favicon_package/apple-touch-icon.png'
        />
        <Link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='../public/favicon_package/favicon-32x32.png'
        />
        <Link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='../public/favicon_package/favicon-16x16.png'
        />
        <Link
          rel='manifest'
          href='../public/favicon_package/site.webmanifest'
        />
        <Link
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
