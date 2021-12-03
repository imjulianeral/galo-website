const nodemailer = require('nodemailer')

export default async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: 'SSLv3',
    },
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  const info = await transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_DESTINY,
    subject: 'EMAIL SITIO WEB GALO',
    html: req.body.template,
  })

  res.status(200).json(info)
}
