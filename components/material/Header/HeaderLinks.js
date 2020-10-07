/*eslint-disable*/
import useMobile from 'hooks/useMobile'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import Hidden from '@material-ui/core/Hidden'

// @material-ui/icons
import { Apps, Info, Mail, Work } from '@material-ui/icons'
// core components
import Button from 'components/material/CustomButtons/Button.js'

import styles from 'assets/jss/nextjs-material-kit/components/headerLinksStyle.js'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const classes = useStyles()
  const isMobile = useMobile()

  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem} style={{ color: '#555555' }}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Servicios"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/">
              <a className={classes.dropdownLink}>Servicios</a>
            </Link>,
          ]}
        />
      </ListItem> */}
      <Hidden only={['sm', 'xs']}>
        <ListItem className={classes.listItem} /*style={{ color: '#555555' }}*/>
          <Button href="#services" color="transparent" className={classes.navLink}>
            <Apps /> Servicios
          </Button>
        </ListItem>
        <ListItem className={classes.listItem} /*style={{ color: '#555555' }}*/>
          <Button href="#about" color="transparent" className={classes.navLink}>
            <Info /> Acerca
          </Button>
        </ListItem>
        <ListItem className={classes.listItem} /*style={{ color: '#555555' }}*/>
          <Button href="#experience" color="transparent" className={classes.navLink}>
            <Work /> Experiencia
          </Button>
        </ListItem>
        <ListItem className={classes.listItem} /*style={{ color: '#555555' }}*/>
          <Button href="#contact" color="transparent" className={classes.navLink}>
            <Mail /> Contacto
          </Button>
        </ListItem>
      </Hidden>
      {/* <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem} /*style={{ color: '#555555' }}*/>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Síguenos en twitter"
          placement={'top'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            target="_blank"
            color="transparent"
            href="https://twitter.com/GaloInst"
            rel="noopener noreferrer"
            className={classes.navLink}
          >
            <i
              className={classes.socialIcons + ' fab fa-twitter'}
              style={{ marginRight: isMobile ? '1rem' : '0' }}
            />
            {isMobile && 'Síguenos en twitter'}
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem} /*style={{ color: '#555555' }}*/>
        <Tooltip
          id="instagram-facebook"
          title="Síguenos en facebook"
          placement={'top'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            target="_blank"
            href="https://www.facebook.com/Instalaciones-Galo-1272431336191699"
            rel="noopener noreferrer"
            className={classes.navLink}
          >
            <i
              className={classes.socialIcons + ' fab fa-facebook'}
              style={{ marginRight: isMobile ? '1rem' : '0' }}
            />
            {isMobile && 'Síguenos en facebook'}
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem} /*style={{ color: '#555555' }}*/>
        <Tooltip
          id="instagram-tooltip"
          title="Síguenos en instagram"
          placement={'top'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            target="_blank"
            href="https://www.instagram.com/instalacionesgalo/"
            rel="noopener noreferrer"
            className={classes.navLink}
          >
            <i
              className={classes.socialIcons + ' fab fa-instagram'}
              style={{ marginRight: isMobile ? '1rem' : '0' }}
            />
            {isMobile && 'Síguenos en instagram'}
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}
