import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link
          rel="shortcut icon"
          href="/img/icon-512.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/img/icon-512.png"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A boilerplate to started projects with NextJS, typescript adn Styled-components"
        />
        <meta name="theme-color" content="#06092B" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
