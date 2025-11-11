import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Log env var za provjeru (privremeno)
  console.log(
    "SMTP connecting to:",
    process.env.SMTP_HOST,
    process.env.SMTP_PORT
  );

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
      subject: `📬 New message from ${name}`,
      html: `
    <div style="background-color:#f7f9fc;padding:40px 0;font-family:'Inter',Arial,sans-serif;">
      <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;box-shadow:0 6px 18px rgba(0,0,0,0.08);overflow:hidden;">
        <div style="background-color:#0066ff;color:#fff;padding:24px;text-align:center;">
          <h1 style="margin:0;font-size:24px;">Peoplet Studio</h1>
          <p style="margin:4px 0 0;font-size:15px;opacity:0.9;">New Inquiry via Website</p>
        </div>

        <div style="padding:28px 32px;color:#333;">
          <h2 style="font-size:20px;margin-bottom:12px;">New contact message received</h2>
          <p style="font-size:16px;line-height:1.6;">
            <b>Name:</b> ${name}<br/>
            <b>Email:</b> ${email}<br/><br/>
            <b>Message:</b><br/>
            <span style="display:block;background:#f4f7ff;border-left:4px solid #0066ff;padding:12px 16px;border-radius:8px;margin-top:6px;">
              ${message}
            </span>
          </p>
        </div>

        <div style="background:#f0f3fa;padding:16px 24px;text-align:center;font-size:13px;color:#555;">
          <p style="margin:0;">This message was sent from the <b>Peoplet Studio</b> website.</p>
          <p style="margin:4px 0 0;">© ${new Date().getFullYear()} Peoplet Studio — <a href="https://www.peoplet.com" style="color:#0066ff;text-decoration:none;">www.peoplet.com</a></p>
        </div>
      </div>
    </div>
  `,
    });

    console.log("✅ Email sent successfully!");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Email error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
