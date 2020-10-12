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
    <div id="acerca" className={classes.section}>
      <h2 className={classes.title}>Acerca de nosotros.</h2>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <CustomTabs
              headerColor="info"
              style={{ justifyContent: 'center' }}
              tabs={[
                {
                  tabName: 'Misión',
                  tabIcon: TrackChanges,
                  tabContent: (
                    <p
                      style={{
                        fontSize: '18px',
                        marginTop: '1rem',
                        textAlign: 'justify',
                        textJustify: 'inter-word',
                      }}
                    >
                      Ofrecer soluciones integrales de telecomunicaciones, manteniendo un
                      estándar de calidad alto con un excelente prestigio. Se busca la
                      mejora continua de acuerdo a las necesidades adecuadas para el
                      cliente y así obtener la satisfacción del mismo.
                    </p>
                  ),
                },
                {
                  tabName: 'Visión',
                  tabIcon: Visibility,
                  tabContent: (
                    <p
                      style={{
                        fontSize: '18px',
                        marginTop: '1rem',
                        textAlign: 'justify',
                        textJustify: 'inter-word',
                      }}
                    >
                      Formar parte de la lista de empresas líderes en el país dentro del
                      área de telecomunicaciones, proporcionando una solución integral y
                      así cubrir las necesidades de nuestros clientes.
                    </p>
                  ),
                },
                {
                  tabName: 'Ubicación',
                  tabIcon: Room,
                  tabContent: (
                    <>
                      <p
                        style={{
                          fontSize: '18px',
                          marginTop: '1rem',
                          textAlign: 'justify',
                          textJustify: 'inter-word',
                        }}
                      >
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
