import Head from 'next/head'
import { Fragment } from 'react'
import BottomNav from 'components/layout/BottomNav'
import 'assets/scss/nextjs-material-kit.scss'

export const getStaticProps = async ({ Component, router, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getStaticProps(ctx)
  }

  return { pageProps }
}

export default function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>GALO</title>
      </Head>
      <Component {...pageProps} />
      <BottomNav />
    </Fragment>
  )
}
