const nodemailer = require('nodemailer')

export default async (req, res) => {
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
