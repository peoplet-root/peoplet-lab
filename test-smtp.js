import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "mail.peoplet.io",
  port: 465,
  secure: true,
  auth: {
    user: "info@peoplet.io",
    pass: "Jmt1fBP45t6P",
  },
});

transporter.verify((error, success) => {
  if (error) console.log("❌ Error:", error);
  else console.log("✅ Ready to send emails");
});
