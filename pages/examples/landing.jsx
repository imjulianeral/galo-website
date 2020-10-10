// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import Header from 'components/material/Header/Header.js'
import Footer from 'components/material/Footer/Footer.js'
import HeaderLinks from 'components/material/Header/HeaderLinks.js'
import Parallax from 'components/material/Parallax/Parallax.js'
// My Components
import Vanta from 'components/layout/Vanta'

import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js'

// Sections for this page
import ProductSection from 'pages-sections/LandingPage-Sections/ProductSection.js'
import WorkSection from 'pages-sections/LandingPage-Sections/WorkSection.js'

const dashboardRoutes = []

const useStyles = makeStyles(styles)

export default function LandingPage(props) {
  const classes = useStyles()
  const { ...rest } = props

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="GALO"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      {/* <Parallax filter responsive image={require('assets/img/profile-bg.jpg')}> */}
      <Parallax filter responsive>
        <Vanta />
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}
