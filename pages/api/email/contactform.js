const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const message = {
    from: req.body.email,
    to: process.env.EMAIL_TO,
    subject: "Wiadomość z formularza kontaktowego",
    text: req.body.message,
    html: `
    <h1>Wiadomość od ${req.body.name}</h1>
    <p>Email osoby piszącej: <a href='mailto:${req.body.email}'>${req.body.email}</a></p>
    <p>Wiadomość: ${req.body.message}</p>
    `,
  };

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP_ADDRESS,
    port: process.env.EMAIL_SMTP_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Coś poszło nie tak! Spróbuj ponownie lub napisz wiadomość na kontakt@zywiec-laweta.pl`,
        });
      } else {
        res.status(250).json({
          success: `Wiadomość dostarczona!`,
        });
      }
    });
  }
}
