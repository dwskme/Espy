const nodeMailer = require("nodemailer");

const sendEmail = async(options) =>{

    const transporter = nodeMailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "029593dd4a408c",
            pass: "14b928d16e9956"
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