/*eslint-disable*/
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// material-ui core components
import { makeStyles } from '@material-ui/core/styles'

import styles from 'assets/jss/nextjs-material-kit/components/footerStyle.js'

const useStyles = makeStyles(styles)

export default function Footer(props) {
  const classes = useStyles()
  const { whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div style={{ margin: '1rem 0 5rem 0' }}>
          &copy; {1900 + new Date().getYear()} , Todos los derechos reservados GALO.
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
}
