import '../styles/sass/globals.scss';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Script from 'next/script';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>CENTREsquare</title>
        <meta name='description' content="Australia's Number 1 source for all the latest sports news" />
        <meta name="keywords" content="AFL, Footy, Basketball, Golf, Soccer, Rugby, Motorsport, Car Racing, Tennis, Sports News" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} strategy='afterInteractive' />

      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
      >
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID});
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default MyApp
