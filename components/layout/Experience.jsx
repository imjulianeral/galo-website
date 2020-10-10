// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import GridContainer from 'components/material/Grid/GridContainer.js'
import GridItem from 'components/material/Grid/GridItem.js'

import styles from 'assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js'
import image from 'assets/img/faces/avatar.jpg'

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
        <GridItem xs={12} sm={2}>
          <img
            src={require('assets/img/companies/donaldson.svg')}
            alt="donaldson"
            width="100%"
            height="100%"
            className={
              classes.imgRaised + ' ' + classes.imgRounded + ' ' + classes.imgFluid
            }
          />
        </GridItem>
        <GridItem xs={12} sm={2} className={classes.marginLeft}>
          <img
            src={require('assets/img/companies/jatco.svg')}
            alt="jatco"
            width="100%"
            height="100%"
            className={
              classes.imgRaised + ' ' + classes.imgRounded + ' ' + classes.imgFluid
            }
          />
        </GridItem>
        <GridItem xs={12} sm={2} className={classes.marginLeft}>
          <img
            src={require('assets/img/companies/marelli.svg')}
            alt="marelli"
            width="100%"
            height="100%"
            className={
              classes.imgRaised + ' ' + classes.imgRounded + ' ' + classes.imgFluid
            }
          />
        </GridItem>
        <GridItem xs={12} sm={2} className={classes.marginLeft}>
          <img
            src={require('assets/img/companies/minth.svg')}
            alt="minth"
            width="100%"
            height="100%"
            className={
              classes.imgRaised + ' ' + classes.imgRounded + ' ' + classes.imgFluid
            }
          />
        </GridItem>
        <GridItem xs={12} sm={2} className={classes.marginLeft}>
          <img
            src={require('assets/img/companies/ngk.svg')}
            alt="ngk"
            width="100%"
            height="100%"
            className={
              classes.imgRaised + ' ' + classes.imgRounded + ' ' + classes.imgFluid
            }
          />
        </GridItem>
        <GridItem xs={12} sm={2} className={classes.marginLeft}>
          <img
            src={require('assets/img/companies/vorwerk.svg')}
            alt="vorwerk"
            width="100%"
            height="100%"
            className={
              classes.imgRaised + ' ' + classes.imgRounded + ' ' + classes.imgFluid
            }
          />
        </GridItem>
      </GridContainer>
      <GridContainer />
    </div>
  )
}
