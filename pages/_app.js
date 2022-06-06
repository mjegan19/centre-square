import '../styles/sass/globals.scss';
import Layout from '../components/layout/Layout';
import Script from 'next/script';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>

      <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-XB2M7PLMH7`} strategy='afterInteractive' />

      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
      >
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XB2M7PLMH7');
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default MyApp
