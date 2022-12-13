import Image from 'next/image'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import GridContainer from 'components/material/Grid/GridContainer.js'
import GridItem from 'components/material/Grid/GridItem.js'

import Carousel from 'react-slick'

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js'

// Images
import alhua from '../../public/img/brands/alhua.png'
import alliede from '../../public/img/brands/alliede.png'
import apc from '../../public/img/brands/apc.png'
import aruba from '../../public/img/brands/aruba.png'
import avaya from '../../public/img/brands/avaya.png'
import belden from '../../public/img/brands/belden.png'
import cablofil from '../../public/img/brands/cablofil.png'
import charofil from '../../public/img/brands/charofil.png'
import cisco from '../../public/img/brands/cisco.png'
import commscope from '../../public/img/brands/commscope.png'
import condumex from '../../public/img/brands/condumex.png'
import dlink from '../../public/img/brands/dlink.png'
import epcom from '../../public/img/brands/epcom.png'
import firelite from '../../public/img/brands/firelite.png'
import fluke from '../../public/img/brands/fluke.png'
import fortinet from '../../public/img/brands/fortinet.png'
import honeywell from '../../public/img/brands/honeywell.png'
import hp from '../../public/img/brands/hp.png'
import huawei from '../../public/img/brands/huawei.png'
import ideal from '../../public/img/brands/ideal.png'
import leviton from '../../public/img/brands/leviton.png'
import lg from '../../public/img/brands/lg.png'
import notifier from '../../public/img/brands/notifier.png'
import panasonic from '../../public/img/brands/panasonic.png'
import pandout from '../../public/img/brands/pandout.png'
import ruckus from '../../public/img/brands/ruckus.png'
import syscom from '../../public/img/brands/syscom.png'
import toshiba from '../../public/img/brands/toshiba.png'
import totalground from '../../public/img/brands/totalground.png'
import tplink from '../../public/img/brands/tplink.png'
import tripplite from '../../public/img/brands/tripplite.png'
import tyton from '../../public/img/brands/tyton.png'
import ubiquiti from '../../public/img/brands/ubiquiti.png'

const brands = [
  { src: alhua, alt: 'alhua' },
  { src: alliede, alt: 'alliede' },
  { src: apc, alt: 'apc' },
  { src: aruba, alt: 'aruba' },
  { src: avaya, alt: 'avaya' },
  { src: belden, alt: 'belden' },
  { src: cablofil, alt: 'cablofil' },
  { src: charofil, alt: 'charofil' },
  { src: cisco, alt: 'cisco' },
  { src: commscope, alt: 'commscope' },
  { src: condumex, alt: 'condumex' },
  { src: dlink, alt: 'dlink' },
  { src: epcom, alt: 'epcom' },
  { src: firelite, alt: 'firelite' },
  { src: fluke, alt: 'fluke' },
  { src: fortinet, alt: 'fortinet' },
  { src: honeywell, alt: 'honeywell' },
  { src: hp, alt: 'hp' },
  { src: huawei, alt: 'huawei' },
  { src: ideal, alt: 'ideal' },
  { src: leviton, alt: 'leviton' },
  { src: lg, alt: 'lg' },
  { src: notifier, alt: 'notifier' },
  { src: panasonic, alt: 'panasonic' },
  { src: pandout, alt: 'pandout' },
  { src: ruckus, alt: 'ruckus' },
  { src: syscom, alt: 'syscom' },
  { src: toshiba, alt: 'toshiba' },
  { src: totalground, alt: 'totalground' },
  { src: tplink, alt: 'tplink' },
  { src: tripplite, alt: 'tripplite' },
  { src: tyton, alt: 'tyton' },
  { src: ubiquiti, alt: 'tyton' },
]

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
            {brands.map(({ alt, src }) => (
              <Image src={src} alt={alt} />
            ))}
          </Carousel>
        </GridItem>
      </GridContainer>
    </div>
  )
}
