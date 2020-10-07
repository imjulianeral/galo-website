import { Email } from 'react-html-email'
import { Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import GridContainer from 'components/material/Grid/GridContainer.js'
import GridItem from 'components/material/Grid/GridItem.js'
import Quote from 'components/material/Typography/Quote.js'

import styles from 'assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js'
const useStyles = makeStyles(styles)

export default function InlineLink({
  name,
  lastname,
  email,
  phone,
  place,
  company,
  message,
  service,
}) {
  const classes = useStyles()

  return (
    <Email title="GALO Email">
      <div className={classes.typo}>
        <h3>
          {name} {lastname} te envio un email.
        </h3>
      </div>
      <GridContainer justify="center">
        <GridItem xs={6} sm={6} md={6}>
          Email: {email}
        </GridItem>
        <Divider orientation="vertical" />
        <GridItem xs={6} sm={6} md={6}>
          Teléfono: {phone}
        </GridItem>
        <Divider />

        <GridItem xs={6} sm={6} md={6}>
          Servicio: {service}
        </GridItem>
        <Divider orientation="vertical" />
        <GridItem xs={6} sm={6} md={6}>
          Empresa: {company}
        </GridItem>
        <Divider />
        <GridItem xs={12} sm={12} md={12}>
          Lugar de trabajo: {place}
        </GridItem>
        <Divider />

        <GridItem xs={12} sm={12} md={12}>
          <Quote text={message} author={`${name} ${lastname}`} />
        </GridItem>
      </GridContainer>
    </Email>
  )
}
