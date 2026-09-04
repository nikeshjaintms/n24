import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * POST /api/contact
 * Handles Challenge Pass / Claim Pass form submissions.
 * Sends form details to MAIL_TO_ADDRESS via Gmail SMTP.
 * All credentials are read from environment variables — never hardcoded.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    // Basic validation
    if (!firstName || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Read SMTP config from environment variables
    const smtpHost = process.env.MAIL_HOST;
    const smtpPort = Number(process.env.MAIL_PORT) || 465;
    const smtpUser = process.env.MAIL_USERNAME;
    const smtpPass = process.env.MAIL_PASSWORD;
    const fromAddress = process.env.MAIL_FROM_ADDRESS;
    const fromName = process.env.MAIL_FROM_NAME || "N24 Pilates Studio";
    const toAddress = process.env.MAIL_TO_ADDRESS;

    if (!smtpHost || !smtpUser || !smtpPass || !fromAddress || !toAddress) {
      console.error(
        "Missing SMTP environment variables. Check your .env.local file."
      );
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    // Create transporter — Gmail SSL on port 465
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: true, // SSL (port 465)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const fullName = [firstName, lastName].filter(Boolean).join(" ");
    const submittedAt = new Date().toLocaleString("en-AU", {
      timeZone: "Australia/Perth",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Build email HTML — clearly marked as Challenge Pass submission
    const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#0E2024;padding:28px 36px;">
              <p style="margin:0 0 4px 0;color:#a8c0c8;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">N24 Pilates Studio</p>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:0.02em;">
                New Challenge Pass Submission
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 36px;">
              <p style="margin:0 0 24px 0;color:#555;font-size:14px;line-height:1.6;">
                A new submission has been received from the <strong>Challenge Pass / Complimentary Pass</strong> form on the N24 Pilates Studio website.
              </p>

              <!-- Details Table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 16px;background:#f8f7f3;border-radius:6px 6px 0 0;border-bottom:1px solid #e5e5e5;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#888;">Name</span><br/>
                    <span style="font-size:16px;color:#111;font-weight:600;">${fullName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background:#ffffff;border-bottom:1px solid #e5e5e5;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#888;">Email</span><br/>
                    <a href="mailto:${email}" style="font-size:15px;color:#0E2024;">${email}</a>
                  </td>
                </tr>
                ${
                  phone
                    ? `<tr>
                  <td style="padding:12px 16px;background:#f8f7f3;border-bottom:1px solid #e5e5e5;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#888;">Phone</span><br/>
                    <span style="font-size:15px;color:#111;">${phone}</span>
                  </td>
                </tr>`
                    : ""
                }
                ${
                  message
                    ? `<tr>
                  <td style="padding:12px 16px;background:#ffffff;border-bottom:1px solid #e5e5e5;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#888;">Details</span><br/>
                    <span style="font-size:15px;color:#111;">${message}</span>
                  </td>
                </tr>`
                    : ""
                }
                <tr>
                  <td style="padding:12px 16px;background:#f8f7f3;border-radius:0 0 6px 6px;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#888;">Page</span><br/>
                    <span style="font-size:14px;color:#111;">Challenge Pass</span>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <div style="margin-top:28px;padding:16px 20px;background:#e8f0f2;border-radius:8px;border-left:4px solid #0E2024;">
                <p style="margin:0;font-size:13px;color:#333;">
                  <strong>💬 To reply to this customer:</strong> Simply hit <em>Reply</em> — your response will go directly to <strong>${email}</strong>.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 36px;border-top:1px solid #eee;">
              <p style="margin:0;font-size:11px;color:#aaa;">
                Submitted At: ${submittedAt} (AWST) &nbsp;·&nbsp; N24 Pilates Studio &nbsp;·&nbsp; Unit G3/3 Kintail Rd, Applecross WA 6153
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: toAddress,
      replyTo: email, // clicking Reply goes directly to the customer
      subject: `New Challenge Pass Submission — ${fullName}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // Log full error securely on server — never expose to frontend
    console.error("[/api/contact] Email send failed:", error);
    return NextResponse.json(
      { error: "We couldn't send your request. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
