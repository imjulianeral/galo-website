import Image from 'next/image'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import GridContainer from 'components/material/Grid/GridContainer.js'
import GridItem from 'components/material/Grid/GridItem.js'

import styles from 'assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js'

// images
import donaldson from '../../public/img/companies/donaldson.svg'
import jatco from '../../public/img/companies/jatco.svg'
import marelli from '../../public/img/companies/marelli.svg'
import minth from '../../public/img/companies/minth.svg'
import ngk from '../../public/img/companies/ngk.svg'
import vorwerk from '../../public/img/companies/vorwerk.svg'

const companies = [
  { src: donaldson, alt: 'donaldson' },
  { src: jatco, alt: 'jatco' },
  { src: marelli, alt: 'marelli' },
  { src: minth, alt: 'minth' },
  { src: ngk, alt: 'ngk' },
  { src: vorwerk, alt: 'vorwerk' },
]

const useStyles = makeStyles(styles)

export default function Experience() {
  const classes = useStyles()

  return (
    <div id="experiencia" className={classes.section}>
      <h2 className={classes.title} style={{ textAlign: 'center' }}>
        Empresas que confian en nosotros.
      </h2>
      <br />
      <GridContainer>
        {companies.map(({ src, alt }) => (
          <GridItem xs={4} sm={2}>
            <div
              className={
                classes.imgRaised + ' ' + classes.imgRounded + ' ' + classes.imgFluid
              }
            >
              <Image src={src} alt={alt} />
            </div>
          </GridItem>
        ))}
      </GridContainer>
      <GridContainer />
    </div>
  )
}
