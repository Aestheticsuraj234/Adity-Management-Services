"use server";
import { createTransport, Transporter } from "nodemailer";

export const sendMail = async (email: string, name:string , message:string) => {
    console.log(email, name, message);
  const transportOptions = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT), // Make sure to convert the port value to a number
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };

  const transport: Transporter = createTransport(transportOptions);

  const mailOptions = {
    from:email,
    to: process.env.SMTP_USER,
    subject: message,
    text: `Hello, I am ${name} and I would like to contact you.  regarding ${message}`,
};
  
  await transport.sendMail(mailOptions);
};