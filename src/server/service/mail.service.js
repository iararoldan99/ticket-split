import dotenv from "dotenv";
import {Resend} from 'resend';
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (email, subject, text) => {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject,
      text,
      html: '<strong>Este es un correo de prueba</strong>',
    });
  } catch (error) {
    console.error('Error al enviar el correo con Resend:', error);
  }
};

export const sendWelcomeMail = async (toEmail) => {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: toEmail,
      subject: '¡Te damos la bienvenida a TicketSplit!',
      text: 'Gracias por registrarte en nuestra aplicación. ¡Estamos emocionados de tenerte a bordo!',
      html: '<h1>Bienvenido a nuestra aplicación</h1><p>Gracias por registrarte. ¡Estamos emocionados de tenerte a bordo!</p>',
    });
    console.log(`Correo de bienvenida enviado a ${toEmail}`);
  } catch (error) {
    console.error("Error al enviar el correo de bienvenida:", error);
  }
};

export const sendNotificationEmail = async (toEmail, subject, text, html) => {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: toEmail,
      subject: subject,
      text: text,
      html: html,
    });
    console.log(`Correo enviado a ${toEmail}`);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};

export const sendPasswordResetEmail = async (toEmail, resetToken) => {
  const resetUrl = `http://localhost:3000/nueva-contrasena?token=${resetToken}`;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: toEmail,
      subject: 'Restablecimiento de Contraseña',
      html: `<h1>Recupera tu contraseña</h1><p>Haz clic en el siguiente enlace para restablecer tu contraseña: ${resetUrl}</p>`,    });
    console.log(`Correo de reset de contraseña enviado a ${toEmail}`);
  } catch (error) {
  }
};
