// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import GridContainer from 'components/material/Grid/GridContainer.js'
import GridItem from 'components/material/Grid/GridItem.js'

import Carousel from 'react-slick'

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js'

const useStyles = makeStyles(styles)

export default function Experience() {
  const classes = useStyles()
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: false,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div id="experiencia" className={classes.section}>
      <h2 className={classes.title}>Empresas que confian en nosotros.</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
          <Carousel {...settings}>
            <div>
              <img
                src={require('assets/img/companies/donaldson.svg')}
                alt="Donaldson"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            {/* <div>
          <img
            src={require('assets/img/companies/insa.jpg')}
            alt="Insa"
            className="slick-image"
              width="100%"
                height="100%"
            />
        </div> */}
            <div>
              <img
                src={require('assets/img/companies/jatco.svg')}
                alt="Jatco"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            {/* <div>
          <img
            src={require('assets/img/companies/eden.png')}
            alt="Mina el Eden"
            className="slick-image"
              width="100%"
                height="100%"
            />
        </div> */}
            <div>
              <img
                src={require('assets/img/companies/ngk.svg')}
                alt="NGK"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/companies/vorwerk.svg')}
                alt="VORWERK"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/companies/marelli.svg')}
                alt="marelli"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/companies/minth.svg')}
                alt="minth"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
          </Carousel>
          {/* 
      <div>
        <GridContainer>
          <GridItem xs={6} sm={6} md={4}>
            <img
              src={require('assets/img/companies/donaldson.png')}
              alt="Donaldson"
              className={imageClasses}
            />
            <h4 className={classes.cardTitle}>Donaldson</h4>
          </GridItem>
          <GridItem xs={6} sm={6} md={4}>
            <img
              src={require('assets/img/companies/insa.jpg')}
              alt="Insa"
              className={imageClasses}
            />
            <h4 className={classes.cardTitle}>Insa</h4>
          </GridItem>
          <GridItem xs={6} sm={6} md={4}>
            <img
              src={require('assets/img/companies/jatco.png')}
              alt="Jatco"
              className={imageClasses}
            />
            <h4 className={classes.cardTitle}>Jatco</h4>
          </GridItem>
          <GridItem xs={6} sm={6} md={4}>
            <img
              src={require('assets/img/companies/eden.png')}
              alt="Mina el Eden"
              className={imageClasses}
            />
            <h4 className={classes.cardTitle}>Mina el Edén</h4>
          </GridItem>
          <GridItem xs={6} sm={6} md={4}>
            <img
              src={require('assets/img/companies/ngk.png')}
              alt="NGK"
              className={imageClasses}
            />
            <h4 className={classes.cardTitle}>NGK</h4>
          </GridItem>
          <GridItem xs={6} sm={6} md={4}>
            <img
              src={require('assets/img/companies/vorwerk.png')}
              alt="VORWERK"
              className={imageClasses}
            />
            <h4 className={classes.cardTitle}>VORWERK</h4>
          </GridItem>
        </GridContainer>
      </div> */}
        </GridItem>
      </GridContainer>
    </div>
  )
}
