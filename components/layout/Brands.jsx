// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import GridContainer from 'components/material/Grid/GridContainer.js'
import GridItem from 'components/material/Grid/GridItem.js'

import Carousel from 'react-slick'

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js'

const useStyles = makeStyles(styles)

export default function Brands() {
  const classes = useStyles()
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div id="experiencia" className={classes.section}>
      <h2 className={classes.title}>Las herramientas que usamos.</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
          <Carousel {...settings}>
            <div>
              <img
                src={require('assets/img/brands/avaya.png')}
                alt="Avaya"
                className="slick-image"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/alhua.png')}
                alt="alhua"
                className="slick-image"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/alliede.png')}
                alt="alliede"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/charofil.png')}
                alt="charofil"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/apc.png')}
                alt="APC"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/aruba.png')}
                alt="aruba"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/belden.png')}
                alt="belden"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/cablofil.png')}
                alt="cablofil"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/cisco.png')}
                alt="cisco"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/commscope.png')}
                alt="commscope"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/condumex.png')}
                alt="condumex"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/dlink.png')}
                alt="d-link"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/epcom.png')}
                alt="epcom"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/firelite.png')}
                alt="firelite"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/fluke.png')}
                alt="fluke"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/fortinet.png')}
                alt="fortinet"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/honeywell.png')}
                alt="honeywell"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/hp.png')}
                alt="hp"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/huawei.png')}
                alt="huawei"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/ideal.png')}
                alt="ideal"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/leviton.png')}
                alt="leviton"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/lg.png')}
                alt="lg"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/notifier.png')}
                alt="notifier"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/panasonic.png')}
                alt="panasonic"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/pandout.png')}
                alt="pandout"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/notifier.png')}
                alt="notifier"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/ruckus.png')}
                alt="ruckus"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/syscom.png')}
                alt="syscom"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/toshiba.png')}
                alt="toshiba"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/totalground.png')}
                alt="total ground"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/tplink.png')}
                alt="tplink"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/tripplite.png')}
                alt="tripp lite"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/tyton.png')}
                alt="Hellermann Tyton"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/ubiquiti.png')}
                alt="Ubiquiti"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
          </Carousel>
        </GridItem>
      </GridContainer>
    </div>
  )
}