// @material-ui/core components
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

// @material-ui/icons
import {
  Router,
  PhotoLibrary,
  Timeline,
  DevicesOther,
  Fingerprint,
  VerifiedUser,
} from '@material-ui/icons'
// core components
import GridContainer from 'components/material/Grid/GridContainer.js'
import GridItem from 'components/material/Grid/GridItem.js'
import InfoArea from 'components/material/InfoArea/InfoArea.js'
import NavPills from 'components/material/NavPills/NavPills.js'
import { Divider } from '@material-ui/core'

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js'
import profileStyles from 'assets/jss/nextjs-material-kit/pages/profilePage.js'

const useStyles = makeStyles(styles)
const useProfileStyles = makeStyles(profileStyles)

export default function ProductSection() {
  const classes = useStyles()
  const profileClasses = useProfileStyles()
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Servicios</h2>
          <h5 className={classes.description}>
            Nuestros servicios buscan satisfacer las necesidades de nuestros clientes;
            para esto damos un servicio totalmente personalizado que se adapte
            completamente a cada cliente.
          </h5>
        </GridItem>
      </GridContainer>
      <div className={profileClasses.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={7} lassName={profileClasses.navWrapper}>
            <NavPills
              alignCenter
              color="info"
              tabs={[
                {
                  tabButton: 'Redes IP, Voz y Datos',
                  tabIcon: Timeline,
                  tabContent: (
                    <>
                      <InfoArea
                        title="Redes"
                        description={
                          <List component="nav" aria-label="secondary mailbox folders">
                            <ListItem button>
                              <ListItemText primary="Cableado estructurado, voz y datos." />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                              <ListItemText primary="Diseño y realización de proyectos de fibra óptica." />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                              <ListItemText primary="Proyectos de redes inalámbricas." />
                            </ListItem>
                            <Divider />

                            <ListItem button>
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
                  tabButton: 'Seguridad Electrónica',
                  tabIcon: VerifiedUser,
                  tabContent: (
                    <InfoArea
                      title="Seguridad"
                      description={
                        <List component="nav" aria-label="secondary mailbox folders">
                          <ListItem button>
                            <ListItemText primary="Sistemas de detección de incendios." />
                          </ListItem>
                          <Divider />
                          <ListItem button>
                            <ListItemText primary="Alarmas de Intrusión y controles de acceso." />
                          </ListItem>
                          <Divider />
                          <ListItem button>
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
                  tabButton: 'Sistemas IP Multimedia',
                  tabIcon: PhotoLibrary,
                  tabContent: (
                    <InfoArea
                      title="Sistemas IP Multimedia"
                      description={
                        <List component="nav" aria-label="secondary mailbox folders">
                          <ListItem button>
                            <ListItemText primary="Sistemas de TV IPTV." />
                          </ListItem>
                          <Divider />
                          <ListItem button>
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
        </GridContainer>
      </div>
    </div>
  )
}
