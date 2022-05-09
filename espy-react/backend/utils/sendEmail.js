const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {

    const transporter = nodeMailer.createTransport({
        // host: "smtp.mailtrap.io",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: "email",
            pass: "password"
        }
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(mailOptions);

};

module.exports = sendEmail;