import { useState } from 'react'
import useMobile from 'hooks/useMobile'

import { useFormik } from 'formik'
import * as yup from 'yup'
import { renderEmail } from 'react-html-email'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Snackbar,
  Popover,
} from '@material-ui/core'

// @material-ui/icons
import {
  Send as SendIcon,
  Check as CheckIcon,
  Call as CallIcon,
  WhatsApp as WhatsAppIcon,
  Room as MapIcon,
} from '@material-ui/icons'
// core components
import GridContainer from 'components/material/Grid/GridContainer.js'
import GridItem from 'components/material/Grid/GridItem.js'
import CustomInput from 'components/material/CustomInput/CustomInput.js'
import Button from 'components/material/CustomButtons/Button.js'
import SnackbarContent from 'components/material/Snackbar/SnackbarContent.js'
import Email from 'components/mail/Email'

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js'
import popoverStyles from 'assets/jss/nextjs-material-kit/popoverStyles.js'
import axios from 'axios'

const useStyles = makeStyles(styles)
const usePopoverStyles = makeStyles(popoverStyles)
const useFormStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1.2),
    marginLeft: '-0.1rem',
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))
const serviceOptions = [
  'Venta de equipos',
  'Tubería',
  'Cableado estructurado',
  'Diseño físico de red',
  'Diseño lógico de red',
  'Otro',
]

export default function Contact() {
  const [open, setOpen] = useState(false)
  const [anchorElTop, setAnchorElTop] = useState(null)
  const isMobile = useMobile()
  const classes = useStyles()
  const formClasses = useFormStyles()
  const popoverClasses = usePopoverStyles()
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      place: '',
      company: '',
      service: '',
      message: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('El nombre es obligatorio'),
      lastname: yup.string().required('El apellido es obligatorio'),
      email: yup
        .string()
        .email('Escribe un email válido por favor')
        .required('El email es obligatorio'),
      company: yup.string().required('La empresa es obligatoria'),
      place: yup.string().required('El lugar es obligatorio'),
      message: yup.string().required('La descripción es obligatoria'),
      service: yup.string().required('Seleccione un servicio'),
      phone: yup
        .string()
        .trim()
        .min(10, 'Debe ser un número de 10 digitos')
        .required('El teléfono es obligatorio'),
    }),
    onSubmit: async values => {
      const messageHtml = renderEmail(<Email {...values} />)

      const resp = await axios.post('/api/send-mail', {
        template: messageHtml,
      })

      if (resp.data.response.includes('2.0.0 OK')) setOpen(true)

      formik.resetForm()
    },
  })

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return

    setOpen(false)
  }

  return (
    <div id="contacto" className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Trabaja con nosotros.</h2>
          <h5 className={classes.description}>
            Puedes contactarnos por teléfono o llenando el siguiente formulario con tus
            datos.
          </h5>
          <div className={classes.title}>
            {!isMobile && (
              <>
                <Button
                  color="info"
                  size="lg"
                  onClick={event => setAnchorElTop(event.currentTarget)}
                  justIcon
                  round
                >
                  <CallIcon />
                </Button>
                <Popover
                  classes={{
                    paper: popoverClasses.popover,
                  }}
                  open={Boolean(anchorElTop)}
                  anchorEl={anchorElTop}
                  onClose={() => setAnchorElTop(null)}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                >
                  <h3 className={popoverClasses.popoverHeader}>Teléfono</h3>
                  <div className={popoverClasses.popoverBody}>449-163-36-00</div>
                </Popover>
              </>
            )}

            {isMobile && (
              <>
                <Button
                  href="tel:449-163-36-00"
                  color="info"
                  size="lg"
                  style={{ marginRight: '3rem' }}
                  justIcon
                  round
                >
                  <p style={{ display: 'none' }}>Llama</p>
                  <CallIcon />
                </Button>
                <Button
                  href="whatsapp://send?phone=+524491633600"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="success"
                  size="lg"
                  style={{ marginRight: isMobile ? '3rem' : '0' }}
                  justIcon
                  round
                >
                  <p style={{ display: 'none' }}>Mensajea</p>

                  <WhatsAppIcon />
                </Button>
                <Button
                  href="google.navigation:q=Vista+de+la+Pradera+166,+Lomas+de+Vistabella+II,+20298+Aguascalientes,+Ags.,+Mexico"
                  color="warning"
                  size="lg"
                  justIcon
                  round
                >
                  <p style={{ display: 'none' }}>Visitanos</p>

                  <MapIcon />
                </Button>
              </>
            )}
          </div>
          <form onSubmit={formik.handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText={
                    formik.touched.name && formik.errors.name
                      ? formik.errors.name
                      : 'Nombre'
                  }
                  error={formik.touched.name && formik.errors.name && true}
                  inputProps={{
                    id: 'name',
                    name: 'name',
                    value: formik.values.name,
                    onChange: formik.handleChange,
                    onBlur: formik.handleBlur,
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText={
                    formik.touched.lastname && formik.errors.lastname
                      ? formik.errors.lastname
                      : 'Apellido'
                  }
                  error={formik.touched.lastname && formik.errors.lastname && true}
                  inputProps={{
                    id: 'lastname',
                    name: 'lastname',
                    value: formik.values.lastname,
                    onChange: formik.handleChange,
                    onBlur: formik.handleBlur,
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText={
                    formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : 'Email'
                  }
                  error={formik.touched.email && formik.errors.email && true}
                  inputProps={{
                    id: 'email',
                    name: 'email',
                    value: formik.values.email,
                    onChange: formik.handleChange,
                    onBlur: formik.handleBlur,
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText={
                    formik.touched.phone && formik.errors.phone
                      ? formik.errors.phone
                      : 'Teléfono'
                  }
                  error={formik.touched.phone && formik.errors.phone && true}
                  inputProps={{
                    id: 'phone',
                    name: 'phone',
                    value: formik.values.phone,
                    onChange: formik.handleChange,
                    onBlur: formik.handleBlur,
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText={
                    formik.touched.company && formik.errors.company
                      ? formik.errors.company
                      : 'Empresa'
                  }
                  error={formik.touched.company && formik.errors.company && true}
                  inputProps={{
                    id: 'company',
                    name: 'company',
                    value: formik.values.company,
                    onChange: formik.handleChange,
                    onBlur: formik.handleBlur,
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <FormControl
                  className={formClasses.formControl}
                  error={formik.touched.service && formik.errors.service && true}
                >
                  <InputLabel id="servicelabel">Servicio</InputLabel>
                  <Select
                    labelId="servicelabel"
                    id="service"
                    name="service"
                    value={formik.values.service}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    {serviceOptions.map(service => (
                      <MenuItem key={service} value={service}>
                        {service}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>{formik.errors.service}</FormHelperText>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText={
                    formik.touched.place && formik.errors.place
                      ? formik.errors.place
                      : 'Lugar de Trabajo'
                  }
                  error={formik.touched.place && formik.errors.place && true}
                  inputProps={{
                    id: 'place',
                    name: 'place',
                    value: formik.values.place,
                    onChange: formik.handleChange,
                    onBlur: formik.handleBlur,
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText={
                  formik.touched.message && formik.errors.message
                    ? formik.errors.message
                    : 'Descripción del Trabajo'
                }
                error={formik.touched.message && formik.errors.message && true}
                inputProps={{
                  id: 'message',
                  name: 'message',
                  value: formik.values.message,
                  onChange: formik.handleChange,
                  onBlur: formik.handleBlur,
                  multiline: true,
                  rows: 5,
                }}
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
              />
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button type="submit" color="primary" round>
                  <SendIcon className={classes.icons} />
                  Enviar
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
        <Snackbar
          style={{ marginBottom: '5rem' }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <SnackbarContent
            message={
              <span style={{ marginRight: '2rem' }}>
                <b>¡Perfecto!</b> Nos pondremos en contacto contigo lo mas rápido posible
              </span>
            }
            close
            color="success"
            icon={CheckIcon}
          />
        </Snackbar>
      </GridContainer>
    </div>
  )
}
