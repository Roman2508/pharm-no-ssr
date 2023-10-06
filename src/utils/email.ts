// import { Email } from './smtp'
// import { SMTPClient } from 'smtp-client'
// import {nodemailer} from "nodemailer";
import nodemailer from 'nodemailer'

interface MailProps {
  email: string
  fullname: string
  subject: string
  body: string
}

// export const sendMail = ({ subject, fullname, email, message }: MailProps) => {
//   console.log('Sending...')
//   Email.send({
//     Host: 'mail.pharm.zt.ua',
//     Username: 'pharm_form@pharm.zt.ua',
//     Password: 'Pharm_form_pass',
//     To: 'ptashnyk.roman@pharm.zt.ua',
//     From: 'pharm_form@pharm.zt.ua',
//     Subject: `[Повідомлення з сайту ЖБФФК] : ${subject}`,
//     Body: `
//          <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//          <html lang="ua">
//            <head>
//              <meta charset="utf-8">
//              <title>[Повідомлення з сайту ЖБФФК] : ${subject}</title>
//              <meta name="description" content="The HTML5 Herald">
//              <meta name="author" content="SitePoint">
//              <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
//            </head>

//            <body>
//              <div class="container" style="margin-left: 20px;margin-right: 20px;">
//                <h3>Ви отримали новий лист від ${fullname}, електронна адреса: ✉️${email} </h3>
//                <div style="font-size: 16px;">
//                  <p>Повідомлення:</p>
//                  <p>${message}</p>
//                </div>
//              </div>
//            </body>
//          </html>`,
//   }).then((message) => alert('mail sent successfully'))
// }

// export const sendMailClient = ({ subject, fullname, email, message }: MailProps) => {
//   let s = new SMTPClient({
//     host: 'smtp.gmail.com',
//     port: 465,
//   })

//   let mailTo = 'ptashnyk.roman@pharm.zt.ua'

//   //   if (subject === 'Питання про вступ') {
//   //     mailTo = 'prystupko.olha@pharm.zt.ua'
//   //   } else {
//   //     mailTo = 'college@pharm.zt.ua'
//   //   }

//   ;(async function () {
//     await s.connect()
//     await s.greet({ hostname: 'smtp.gmail.com' }) // runs EHLO command or HELO as a fallback
//     await s.authPlain({
//       username: 'noreply@pharm.zt.ua',
//       password: 'Noreply_pass',
//     }) // authenticates a user
//     await s.mail({ from: 'noreply@pharm.zt.ua' }) // runs MAIL FROM command
//     await s.rcpt({ to: mailTo }) // runs RCPT TO command (run this multiple times to add more recii)
//     await s.data(`
//     <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//     <html lang="ua">
//       <head>
//         <meta charset="utf-8">
//         <title>[Повідомлення з сайту ЖБФФК] : ${subject}</title>
//         <meta name="description" content="The HTML5 Herald">
//         <meta name="author" content="SitePoint">
//         <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
//       </head>

//       <body>
//         <div class="container" style="margin-left: 20px;margin-right: 20px;">
//           <h3>Ви отримали новий лист від ${fullname}, електронна адреса: ✉️${email} </h3>
//           <div style="font-size: 16px;">
//             <p>Повідомлення:</p>
//             <p>${message}</p>
//           </div>
//         </div>
//       </body>
//     </html>`) // runs DATA command and streams email source
//     await s.quit() // runs QUIT command
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
// export const sendNodemailer = ({ subject, fullname, email, body }: MailProps) => {
//   const message = {
//     from: 'pharm_form@pharm.zt.ua', // Sender address
//     to: 'ptashnyk.roman@pharm.zt.ua', // List of recipients
//     subject: `[Повідомлення з сайту ЖБФФК] : ${subject}`, // Subject line
//     text: `
//          <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//          <html lang="ua">
//            <head>
//              <meta charset="utf-8">
//              <title>[Повідомлення з сайту ЖБФФК] : ${subject}</title>
//              <meta name="description" content="The HTML5 Herald">
//              <meta name="author" content="SitePoint">
//              <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
//            </head>

//            <body>
//              <div class="container" style="margin-left: 20px;margin-right: 20px;">
//                <h3>Ви отримали новий лист від ${fullname}, електронна адреса: ✉️${email} </h3>
//                <div style="font-size: 16px;">
//                  <p>Повідомлення:</p>
//                  <p>${body}</p>
//                </div>
//              </div>
//            </body>
//          </html>`, // Plain text body
//   }
//   transport.sendMail(message, function (err, info) {
//     if (err) {
//       console.log(err)
//       alert('error')
//     } else {
//       console.log(info)
//       alert('success')
//     }
//   })
// }

export const sendNodemailer = async ({ subject, fullname, email, body }: MailProps) => {
  const info = await transporter.sendMail({
    from: 'pharm_form@pharm.zt.ua',
    to: 'ptashnyk.roman@pharm.zt.ua',
    subject: `[Повідомлення з сайту ЖБФФК] : ${subject}`,
    text: 'Hello world?',
    html: `
          <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html lang="ua">
            <head>
              <meta charset="utf-8">
              <title>[Повідомлення з сайту ЖБФФК] : ${subject}</title>
              <meta name="description" content="The HTML5 Herald">
              <meta name="author" content="SitePoint">
              <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            </head>
    
            <body>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>Ви отримали новий лист від ${fullname}, електронна адреса: ✉️${email} </h3>
                <div style="font-size: 16px;">
                  <p>Повідомлення:</p>
                  <p>${body}</p>
                </div>
              </div>
            </body>
          </html>`,
  })

  console.log('Message sent: %s', info.messageId)
}

// sendNodemailer().catch(console.error)
