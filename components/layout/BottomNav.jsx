import { useState } from 'react'
import { Hidden, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Apps, Info, ContactMail, Work } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    width: 500,
    position: 'fixed',
    bottom: '0',
    overflow: 'hidden',
    width: '100%',
    zIndex: '20',
    boxShadow: '0 2px 40px 0px rgba(0, 0, 0, 0.2), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
  },
})

export default function BottomNav() {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  return (
    <Hidden only={['md', 'lg', 'xl']}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction href="#servicios" label="Servicios" icon={<Apps />} />
        <BottomNavigationAction href="#acerca" label="Acerca" icon={<Info />} />
        <BottomNavigationAction href="#experiencia" label="Experiencia" icon={<Work />} />
        <BottomNavigationAction
          href="#contacto"
          label="Contacto"
          icon={<ContactMail />}
        />
      </BottomNavigation>
    </Hidden>
  )
}
