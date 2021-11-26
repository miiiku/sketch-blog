import '../styles/var.css'
import '../styles/theme.css'
import '../styles/globals.css'
import '../styles/markdown.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout'
import Config from '../lib/config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>{ Config.title }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
