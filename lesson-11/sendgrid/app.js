const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const mail = {
    to: "tajaye4021@akapple.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Новое письмо с сайта",
    html: "<h2>Новый заказ с сайта</h2>"
};

sgMail.send(mail)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message))