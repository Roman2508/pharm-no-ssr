import { NextApiRequest, NextApiResponse } from 'next'

const nodemailer = require('nodemailer')

interface MailProps {
  email: string
  fullname: string
  subject: string
  body: string
}

// export const sendMailClient = () => {
//   let s = new SMTPClient({
//     host: 'mail.pharm.zt.ua',
//     port: 465,
//   })

//   ;(async function () {
//     await s.connect()
//     await s.greet({ hostname: 'mail.pharm.zt.ua' }) // runs EHLO command or HELO as a fallback
//     await s.authPlain({
//       username: 'pharm_form@pharm.zt.ua',
//       password: 'Pharm_form_pass',
//     }) // authenticates a user
//     await s.mail({ from: 'pharm_form@pharm.zt.ua' }) // runs MAIL FROM command
//     await s.rcpt({ to: 'ptashnyk.roman@pharm.zt.ua' }) // runs RCPT TO command (run this multiple times to add more recii)
//     await s.data('Hola mundo mail source') // runs DATA command and streams email source
//     await s.quit() // runs QUIT command
//     alert('Success')
//   })().catch(console.error)
// }

let transporter = nodemailer.createTransport({
  host: 'mail.pharm.zt.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'pharm_form@pharm.zt.ua',
    pass: 'Pharm_form_pass',
  },
})

export const sendNodemailer = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Process a POST request
    try {
      const info = await transporter.sendMail({
        from: 'pharm_form@pharm.zt.ua',
        to: 'ptashnyk.roman@pharm.zt.ua',
        subject: `[Повідомлення з сайту ЖБФФК] : ${req.body.subject}`,
        text: 'Hello world?',
        html: `
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html lang="ua">
                  <head>
                    <meta charset="utf-8">
                    <title>[Повідомлення з сайту ЖБФФК] : ${req.body.subject}</title>
                    <meta name="description" content="The HTML5 Herald">
                    <meta name="author" content="SitePoint">
                    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
                  </head>
          
                  <body>
                    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                      <h3>Ви отримали новий лист від ${req.body.fullname}, електронна адреса: ✉️${req.body.email} </h3>
                      <div style="font-size: 16px;">
                        <p>Повідомлення:</p>
                        <p>${req.body.body}</p>
                      </div>
                    </div>
                  </body>
                </html>`,
      })

      console.log('Message sent: %s', info.messageId)

      res.status(200).json({ message: 'success' })
    } catch (error) {
      console.error(error, 'nodemailer error')
    }
  }
}
