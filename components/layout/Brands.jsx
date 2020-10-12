// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

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
      <h2 className={classes.title}>Manejamos las mejores marcas.</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
          <Carousel {...settings}>
            <div>
              <img
                src={require('assets/img/brands/avaya.png?webp')}
                alt="Avaya"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/alhua.png?webp')}
                alt="alhua"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/alliede.png?webp')}
                alt="alliede"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/charofil.png?webp')}
                alt="charofil"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/apc.png?webp')}
                alt="APC"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/aruba.png?webp')}
                alt="aruba"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/belden.png?webp')}
                alt="belden"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/cablofil.png?webp')}
                alt="cablofil"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/cisco.png?webp')}
                alt="cisco"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/commscope.png?webp')}
                alt="commscope"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/condumex.png?webp')}
                alt="condumex"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/dlink.png?webp')}
                alt="d-link"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/epcom.png?webp')}
                alt="epcom"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/firelite.png?webp')}
                alt="firelite"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/fluke.png?webp')}
                alt="fluke"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/fortinet.png?webp')}
                alt="fortinet"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/honeywell.png?webp')}
                alt="honeywell"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/hp.png?webp')}
                alt="hp"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/huawei.png?webp')}
                alt="huawei"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/ideal.png?webp')}
                alt="ideal"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/leviton.png?webp')}
                alt="leviton"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/lg.png?webp')}
                alt="lg"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/notifier.png?webp')}
                alt="notifier"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/panasonic.png?webp')}
                alt="panasonic"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/pandout.png?webp')}
                alt="pandout"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/notifier.png?webp')}
                alt="notifier"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/ruckus.png?webp')}
                alt="ruckus"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/syscom.png?webp')}
                alt="syscom"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/toshiba.png?webp')}
                alt="toshiba"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/totalground.png?webp')}
                alt="total ground"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/tplink.png?webp')}
                alt="tplink"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/tripplite.png?webp')}
                alt="tripp lite"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/tyton.png?webp')}
                alt="Hellermann Tyton"
                className="slick-image"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src={require('assets/img/brands/ubiquiti.png?webp')}
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
