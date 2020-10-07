import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import GridContainer from 'components/material/Grid/GridContainer.js'
import GridItem from 'components/material/Grid/GridItem.js'

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js'

const useStyles = makeStyles(styles)

export default function Experience() {
  const classes = useStyles()
  const imageClasses = classNames(classes.imgRaised, classes.imgRounded, classes.imgFluid)
  return (
    <div id="experience" className={classes.section}>
      <h2 className={classes.title}>Empresas que confian en nosotros.</h2>
      <div>
        <GridContainer>
          <GridItem xs={6} sm={6} md={4}>
            <img
              src={require('assets/img/companies/donaldson.png')}
              alt="..."
              className={imageClasses}
            />
            <h4 className={classes.cardTitle}>Donaldson</h4>
          </GridItem>
          <GridItem xs={6} sm={6} md={4}>
            <img
              src={require('assets/img/companies/insa.jpg')}
              alt="..."
              className={imageClasses}
            />
            <h4 className={classes.cardTitle}>Insa</h4>
          </GridItem>
          <GridItem xs={6} sm={6} md={4}>
            <img
              src={require('assets/img/companies/jatco.png')}
              alt="..."
              className={imageClasses}
            />
            <h4 className={classes.cardTitle}>Jatco</h4>
          </GridItem>
          <GridItem xs={6} sm={6} md={4}>
            <img
              src={require('assets/img/companies/eden.png')}
              alt="..."
              className={imageClasses}
            />
            <h4 className={classes.cardTitle}>Mina el Edén</h4>
          </GridItem>
          <GridItem xs={6} sm={6} md={4}>
            <img
              src={require('assets/img/companies/ngk.png')}
              alt="..."
              className={imageClasses}
            />
            <h4 className={classes.cardTitle}>NGK</h4>
          </GridItem>
          <GridItem xs={6} sm={6} md={4}>
            <img
              src={require('assets/img/companies/vorwerk.png')}
              alt="..."
              className={imageClasses}
            />
            <h4 className={classes.cardTitle}>VORWERK</h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
