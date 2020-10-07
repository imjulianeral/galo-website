// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import { Room, TrackChanges, Visibility } from '@material-ui/icons'

// core components
import GridContainer from 'components/material/Grid/GridContainer.js'
import GridItem from 'components/material/Grid/GridItem.js'
import CustomTabs from 'components/material/CustomTabs/CustomTabs.js'

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js'

const useStyles = makeStyles(styles)

export default function About() {
  const classes = useStyles()
  return (
    <div id="about" className={classes.section}>
      <h2 className={classes.title}>Acerca de nosotros.</h2>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              headerColor="info"
              style={{ justifyContent: 'center' }}
              tabs={[
                {
                  tabName: 'Misión',
                  tabIcon: TrackChanges,
                  tabContent: (
                    <p className={classes.textCenter}>
                      Ofrecer soluciones integrales de telecomunicaciones, manteniendo un
                      estándar de calidad alto con un excelente prestigio. Buscando
                      siempre la mejora continua de acuerdo a las necesidades del usuario
                      para así obtener la satisfacción del mismo.
                    </p>
                  ),
                },
                {
                  tabName: 'Visión',
                  tabIcon: Visibility,
                  tabContent: (
                    <p className={classes.textCenter}>
                      Ser una de las empresas líderes en el país en el área de
                      telecomunicaciones, ofreciendo una solución integral, cubriendo las
                      necesidades de los usuarios.
                    </p>
                  ),
                },
                {
                  tabName: 'Ubicación',
                  tabIcon: Room,
                  tabContent: (
                    <>
                      <p className={classes.textCenter}>
                        Vista de la pradera #166 fracc. Lomas de vista bella C.P. 20298
                      </p>
                      <iframe
                        width="100%"
                        height="500"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=%20vista%20de%20la%20pradera%20%23166%20fracc%20lomas%20de%20vista%20bella%20c.p%2020298&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                      ></iframe>
                    </>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
