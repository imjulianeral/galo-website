// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

// core components
import Header from 'components/material/Header/Header.js'
import Footer from 'components/material/Footer/Footer.js'
import HeaderLinks from 'components/material/Header/HeaderLinks.js'
import Parallax from 'components/material/Parallax/Parallax.js'
import GridContainer from 'components/material/Grid/GridContainer.js'
import GridItem from 'components/material/Grid/GridItem.js'
import Button from 'components/material/CustomButtons/Button.js'

// My Components
import Vanta from 'components/layout/Vanta'
import Services from 'components/layout/Services'
import Experience from 'components/layout/Experience'
import Contact from '../components/layout/Contact'
import About from '../components/layout/About'

import styles from 'assets/jss/nextjs-material-kit/pages/components.js'
import Video from '../components/layout/Video'

const dashboardRoutes = []

const useStyles = makeStyles(styles)

export default function LandingPage(props) {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:768px)')
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
      {/* <Parallax filter responsive image={require('assets/img/db.gif')}> */}
      <Parallax filter style={{ backgroundColor: '#ffffff' }}>
        <Video />
        <GridContainer style={{ position: 'absolute', zIndex: '2' }}>
          <GridItem xs={12} sm={12} md={6}>
            <img
              style={
                matches
                  ? {
                      maxWidth: '100%',
                      marginLeft: '5rem',
                    }
                  : {
                      maxWidth: '100%',
                      padding: '1rem',
                    }
              }
              alt="GALO logo"
              src={require('assets/img/galo.svg')}
            />
            <br />
            <Button
              color="danger"
              size="lg"
              href="#servicios"
              style={{ marginLeft: '5rem' }}
            >
              Conoce Nuestros Servicios
            </Button>
          </GridItem>
        </GridContainer>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Services />
          <About />
        </div>
        <Vanta />
        <div className={classes.container}>
          <Experience />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  )
}
