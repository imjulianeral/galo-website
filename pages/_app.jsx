// import ReactDOM from 'react-dom'
import Head from 'next/head'
// import Router from 'next/router'

// import PageChange from 'components/PageChange/PageChange.js'

import BottomNav from '../components/layout/BottomNav'
import 'assets/scss/nextjs-material-kit.scss'

// Router.events.on('routeChangeStart', url => {
//   console.log(`Loading: ${url}`)
//   document.body.classList.add('body-page-transition')
//   ReactDOM.render(<PageChange path={url} />, document.getElementById('page-transition'))
// })
// Router.events.on('routeChangeComplete', () => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
//   document.body.classList.remove('body-page-transition')
// })
// Router.events.on('routeChangeError', () => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
//   document.body.classList.remove('body-page-transition')
// })
export const getStaticProps = async ({ Component, router, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getStaticProps(ctx)
  }

  return { pageProps }
}

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>GALO</title>
      </Head>
      <Component {...pageProps} />
      <BottomNav />
    </React.Fragment>
  )
}
