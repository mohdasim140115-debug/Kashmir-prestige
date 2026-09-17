import { NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/lib/data";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email is not configured yet. Please try WhatsApp instead." },
      { status: 500 }
    );
  }

  const body = await request.json();
  const { name, phone, packageName, travelDate, message, honey } = body;

  // honeypot field: real users never fill this
  if (honey) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const digitsOnly = String(phone).replace(/\D/g, "");
  const whatsappNumber = digitsOnly.startsWith("91") ? digitsOnly : `91${digitsOnly}`;

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #f0ede1;font-size:13px;font-weight:600;color:#9c6522;width:170px;vertical-align:top;white-space:nowrap;">
        ${label}
      </td>
      <td style="padding:12px 0 12px 16px;border-bottom:1px solid #f0ede1;font-size:14px;color:#16241f;">
        ${value || "—"}
      </td>
    </tr>`;

  const html = `
  <div style="background:#f2ede1;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:560px;margin:0 auto;">
      <div style="background:#0f3d30;border-radius:16px 16px 0 0;padding:28px 32px;">
        <p style="margin:0;color:#f2d18f;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">
          Kashmir Prestige
        </p>
        <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;font-weight:700;">
          New Website Enquiry
        </h1>
      </div>

      <div style="background:#ffffff;padding:28px 32px;">
        <table role="presentation" style="width:100%;border-collapse:collapse;">
          ${row("Name", escapeHtml(name))}
          ${row("Phone", escapeHtml(phone))}
          ${row("Interested Package", escapeHtml(packageName ?? ""))}
          ${row("Preferred Travel Date", escapeHtml(travelDate ?? ""))}
          ${row("Message", escapeHtml(message ?? ""))}
        </table>

        <div style="margin-top:28px;">
          <a href="tel:+${whatsappNumber}"
            style="display:inline-block;background:#0f3d30;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;padding:12px 22px;border-radius:999px;margin-right:10px;">
            Call ${escapeHtml(phone)}
          </a>
          <a href="https://wa.me/${whatsappNumber}"
            style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;padding:12px 22px;border-radius:999px;">
            Reply on WhatsApp
          </a>
        </div>
      </div>

      <div style="background:#0f3d30;border-radius:0 0 16px 16px;padding:16px 32px;text-align:center;">
        <p style="margin:0;color:rgba(255,255,255,0.6);font-size:11px;">
          Kashmir Prestige &middot; Sopore, Jammu &amp; Kashmir 193201
        </p>
      </div>
    </div>
  </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Kashmir Prestige Website <onboarding@resend.dev>",
      to: business.email,
      subject: `New Kashmir Tour Enquiry — ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not send enquiry email." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Enquiry send failed:", err);
    return NextResponse.json({ error: "Could not send enquiry email." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
