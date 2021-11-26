import { Html, Head, Main, NextScript } from 'next/document';

export default function Document () {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Long+Cang&display=swap" />
        <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.3.1/styles/rainbow.min.css" />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>

    </Html>
  )
}