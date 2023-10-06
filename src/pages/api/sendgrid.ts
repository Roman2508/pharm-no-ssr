import { NextApiRequest, NextApiResponse } from 'next'

import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '')

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  console.log('req.body: ', req.body)

  let mail = ''

  if (req.body.subject === 'Питання про вступ') {
    mail = 'prystupko.olha@pharm.zt.ua'
  } else {
    mail = 'college@pharm.zt.ua'
  }

  try {
    await sendgrid.send({
      to: mail, // Your email where you'll receive emails
      from: 'noreply@pharm.zt.ua', // your website email address here
      subject: `[Повідомлення з сайту ЖБФФК] : ${req.body.subject}`,
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
              <p>${req.body.message}</p>
            </div>
          </div>
        </body>
      </html>`,
    })

    return res.status(200).json({ message: 'Повідомлення надіслано!' })
  } catch (error) {
    console.log(error)
    // @ts-ignore
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
