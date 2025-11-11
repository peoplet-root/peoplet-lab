import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Log env var za provjeru (privremeno)
  console.log("SMTP connecting to:", process.env.SMTP_HOST, process.env.SMTP_PORT);

  // ⚙️ Transport s fallbackom za različite konfiguracije (465 ili 587)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: Number(process.env.SMTP_PORT) === 465, // true ako 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // ⚠️ dopušta samopotpisane certifikate
      minVersion: "TLSv1", // ⚡️ ispravlja "wrong version number"
    },
  });

  try {
    await transporter.verify(); // provjera prije slanja
    console.log("✅ SMTP verified, sending email...");

    await transporter.sendMail({
      from: `"Peoplet Studio" <${process.env.SMTP_USER}>`,
      to: "info@peoplet.io",
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Email sent successfully!");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Email error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
