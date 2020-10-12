// @material-ui/core components
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import {
  Router,
  PhotoLibrary,
  Timeline,
  DevicesOther,
  Fingerprint,
  VerifiedUser,
  Beenhere,
  Mail,
} from '@material-ui/icons'
// core components
import GridContainer from 'components/material/Grid/GridContainer.js'
import GridItem from 'components/material/Grid/GridItem.js'
import InfoArea from 'components/material/InfoArea/InfoArea.js'
import NavPills from 'components/material/NavPills/NavPills.js'
import Button from 'components/material/CustomButtons/Button.js'

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js'
import profileStyles from 'assets/jss/nextjs-material-kit/pages/profilePage.js'

const useStyles = makeStyles(styles)
const useProfileStyles = makeStyles(profileStyles)

export default function Services() {
  const classes = useStyles()
  const profileClasses = useProfileStyles()

  return (
    <div id="servicios" className={classes.section} style={{ paddingBottom: '0' }}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Servicios.</h2>
          <h5 className={classes.description}>
            Se busca satisfacer las necesidades de nuestros clientes; es por esto que se
            ofrece una asistencia totalmente personalizada a cada cliente.
          </h5>
        </GridItem>
      </GridContainer>
      <div className={profileClasses.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} lg={6}>
            <NavPills
              alignCenter
              color="info"
              tabs={[
                {
                  tabButton: 'Redes',
                  tabIcon: Timeline,
                  tabContent: (
                    <>
                      <InfoArea
                        title="Redes IP, Voz y Datos"
                        description={
                          <List component="nav" aria-label="secondary mailbox folders">
                            <ListItem>
                              <ListItemIcon>
                                <Beenhere style={{ color: 'limegreen' }} />
                              </ListItemIcon>
                              <ListItemText primary="Cableado estructurado, voz y datos." />
                            </ListItem>
                            <Divider />
                            <ListItem>
                              <ListItemIcon>
                                <Beenhere style={{ color: 'limegreen' }} />
                              </ListItemIcon>
                              <ListItemText primary="Diseño y realización de proyectos de fibra óptica." />
                            </ListItem>
                            <Divider />
                            <ListItem>
                              <ListItemIcon>
                                <Beenhere style={{ color: 'limegreen' }} />
                              </ListItemIcon>
                              <ListItemText primary="Proyectos de redes inalámbricas." />
                            </ListItem>
                            <Divider />

                            <ListItem>
                              <ListItemIcon>
                                <Beenhere style={{ color: 'limegreen' }} />
                              </ListItemIcon>
                              <ListItemText primary="Sistemas de telefonía IP/Conmutadores IP." />
                            </ListItem>
                          </List>
                        }
                        icon={Router}
                        iconColor="info"
                        vertical
                      />
                    </>
                  ),
                },
                {
                  tabButton: 'Seguridad',
                  tabIcon: VerifiedUser,
                  tabContent: (
                    <InfoArea
                      title="Seguridad Electrónica"
                      description={
                        <List component="nav" aria-label="secondary mailbox folders">
                          <ListItem>
                            <ListItemIcon>
                              <Beenhere style={{ color: 'limegreen' }} />
                            </ListItemIcon>
                            <ListItemText primary="Sistemas de detección de incendios." />
                          </ListItem>
                          <Divider />
                          <ListItem>
                            <ListItemIcon>
                              <Beenhere style={{ color: 'limegreen' }} />
                            </ListItemIcon>
                            <ListItemText primary="Alarmas de Intrusión y controles de acceso." />
                          </ListItem>
                          <Divider />
                          <ListItem>
                            <ListItemIcon>
                              <Beenhere style={{ color: 'limegreen' }} />
                            </ListItemIcon>
                            <ListItemText primary="Sistemas de video vigilancia CCTV" />
                          </ListItem>
                        </List>
                      }
                      icon={Fingerprint}
                      iconColor="success"
                      vertical
                    />
                  ),
                },
                {
                  tabButton: 'Multimedia',
                  tabIcon: PhotoLibrary,
                  tabContent: (
                    <InfoArea
                      title="Sistemas IP Multimedia"
                      description={
                        <List component="nav" aria-label="secondary mailbox folders">
                          <ListItem>
                            <ListItemIcon>
                              <Beenhere style={{ color: 'limegreen' }} />
                            </ListItemIcon>
                            <ListItemText primary="Sistemas de TV IPTV." />
                          </ListItem>
                          <Divider />
                          <ListItem>
                            <ListItemIcon>
                              <Beenhere style={{ color: 'limegreen' }} />
                            </ListItemIcon>
                            <ListItemText primary="Sistemas de voceo." />
                          </ListItem>
                        </List>
                      }
                      icon={DevicesOther}
                      iconColor="danger"
                      vertical
                    />
                  ),
                },
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <Button color="primary" href="#contacto" round>
              <Mail className={classes.icons} /> Contáctanos
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
