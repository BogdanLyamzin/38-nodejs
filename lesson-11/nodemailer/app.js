const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, // 25, 465, 2255
    secure: true,
    auth: {
        user: "bogdan.lyamzin.d@meta.ua",
        pass: META_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const mail = {
    to: "tajaye4021@akapple.com",
    from: "bogdan.lyamzin.d@meta.ua",
    subject: "Новое письмо с сайта",
    html: "<h2>Новый заказ с сайта</h2>"
};

transporter.sendMail(mail)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message))