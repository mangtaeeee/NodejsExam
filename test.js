const nodemailer = require("nodemailer");

const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c67ac0beb7ca46",
      pass: "6121db4098ef29"
    }
};
const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option, (error,info) => {
        if(error){
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: "osp9658@gmail.com",
    to: "osp9658@gmail.com",
    subject : "처음 보내는 메일입니다.",
    text : "nodejs 이메일 보내기"
}

send(email_data);