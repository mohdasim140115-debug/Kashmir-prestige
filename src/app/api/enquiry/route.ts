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

  const html = `
    <h2>New Kashmir Tour Enquiry</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td><strong>Interested Package</strong></td><td>${escapeHtml(packageName ?? "")}</td></tr>
      <tr><td><strong>Preferred Travel Date</strong></td><td>${escapeHtml(travelDate ?? "")}</td></tr>
      <tr><td><strong>Message</strong></td><td>${escapeHtml(message ?? "")}</td></tr>
    </table>
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
