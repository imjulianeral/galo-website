import { makeStyles } from '@material-ui/core/styles'

import classNames from 'classnames'

import GridContainer from 'components/material/Grid/GridContainer.js'
import GridItem from 'components/material/Grid/GridItem.js'
import Button from 'components/material/CustomButtons/Button.js'

import styles from 'assets/jss/nextjs-material-kit/pages/profilePage.js'

const useStyles = makeStyles(styles)

export default function Index() {
  const classes = useStyles()

  return (
    <div
      className={classNames(classes.main, classes.mainRaised)}
      style={{ position: 'relative', top: '50%', transform: 'translateY(150%)' }}
    >
      <div style={{ padding: '100px' }}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h1>Hello World</h1>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  )
}
