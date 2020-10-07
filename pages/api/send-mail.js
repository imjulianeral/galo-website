const nodemailer = require('nodemailer')

export default async (req, res) => {
  // const { name, lastname, email, phone, place, company, message } = req.body
  // const contentHTML = `
  //   <h1>Información del Usuario<h1/>
  //   <ul>
  //     <li>Nombre de Usuario: ${name} ${lastname}</li>
  //     <li>Email: ${email}</li>
  //     <li>Teléfono: ${phone}</li>
  //     <li>Lugar del trabajo: ${place}</li>
  //     <li>Empresa: ${company}</li>
  //   </ul>
  //   <p>${message}</p>
  // `

  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: process.env.EMAIL_ADDRESS,
  //     pass: process.env.EMAIL_PASSWORD,
  //   },
  // })

  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com', // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: 'SSLv3',
    },
    auth: {
      user: 'ggsteel74@outlook.com',
      pass: 'jjalcs5x17798',
    },
  })

  const info = await transporter.sendMail({
    from: `ggsteel74@outlook.com`,
    to: 'ggsteel74@outlook.com',
    // to: 'inst_galo1@hotmail.com',
    subject: 'Prueba Jorge Acero',
    html: req.body.template,
  })

  res.status(200).json(info)
}
