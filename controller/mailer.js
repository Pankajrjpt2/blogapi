const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pankaj.11806946@gmail.com",
    pass: process.env.PASSWORD,
  },
});

module.exports = {
  mailer: (req, res) => {
    const { email} = req.body;

    let mailDetails = {
      from: `"Pankaj Rajput",pankaj.11806946@gmail.com`,
      to: `${email}`,
      subject: "Thank you for reaching",
      html: `
            <!DOCTYPE html
            PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
        
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Demystifying Email Design</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
            <style type="text/css">
                a[x-apple-data-detectors] {
                    color: inherit !important;
                }
            </style>
        
        </head>
        
        <body style="margin: 0; padding: 0;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td style="padding: 20px 0 30px 0;">
        
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"
                            style="border-collapse: collapsCreating Email Magice; border: 1px solid #cccccc;">
                            <tr>
                                <td align="center" style="padding: 40px 0 30px 0;">
                                    <img src="https://i.postimg.cc/wv3mKSXW/avatar.png" alt="" height="150"
                                        style="display: block;" />
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                        style="border-collapse: collapse;">
                                        <tr>
                                            <td style="color: #16023b; font-family: Arial, sans-serif;">
                                                <h1 style="font-size: 24px; margin: 0;">Hey There,</h1>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;">
                                                <p style="margin: 0;">Thank you so much for Subscribing Us.
                                                </p>
        <br>
                                                <p style="margin: 0;">I'm an
                                                   First off, I’d like to extend a warm welcome and ‘thank you’ for subscribing to the My_Blog newsletter. 
                                                   I recognize that your time is valuable and I’m seriously flattered that you chose to join us.
                                                </p>
        <br/>
                                                <p style="margin: 0;">
                                                   The My_Blog endeavors to send you only the best content, with actionable steps you can take to <br>
                                                   grow your business online and off. If we ever stray from that, just send me an email and I’ll do my damndest to <br>
                                                   get it straightened out.In the meantime, I’d love to hear from you about why you’ve subscribed to our list, and <br>
                                                   what you’re interested in learning about. So long as you reply to this email, I promise I will too.
                                                   <br>
                                                   <br>
                                                   If you need anything, please feel free to give me a shout at <b>pankajrjpt2@gmail.com</b>.
                                                   <br>
                                                   <br>
                                                   Again, welcome!
                                                </p>
        
                                                <br/>
                                              
        
                                               
                                                <br/>
        
                                                <p style="margin: 0;">
                                                    <b>Thank you</b><br/>
                                                    <i style="font-size: 14px;">Pankaj Rajput</i><br/>
                                                    <i style="font-size: 14px;">Lovely Professional University, Jalandhar</i>
                                                </p>
        
                                            </td>
                                            
                                        </tr>
                                        <tr>
                                            <td align="center" style="padding: 20px 0 30px 0;">
                                                <a href="https://srijansingh.tech" style="text-decoration: none;background: #7547ca;padding:15px 40px; border-radius: 50px;color:#fff;"><b>Visit my website</b></a>
        
                                            </td>
                                        </tr>
                                        
                            
                        </table>
        
                    </td>
                </tr>
            </table>
        </body>
        
        </html>`
    };

    mailTransporter.sendMail(mailDetails, (err, data) => {
      if (err) {
        throw new Error(err);
      } else {
        res.status(200).json({
          data: data,
          message: "Success",
        });
      }
    });
  },
};
