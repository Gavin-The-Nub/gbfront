import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const categoryEmailMap: Record<string, string> = {
  "Student/Families/Educator Support": "families@globalbrightfutures.org",
  "Become a Tutor": "educators@globalbrightfutures.org",
  "Vendor Application": "vendor@globalbrightfutures.org",
  "School Partnership": "partnership@globalbrightfutures.org",
  "Sponsorship and Corporate Partnership": "partnership@globalbrightfutures.org",
  "Program Support Inquiry": "support@globalbrightfutures.org",
  "General Inquiry": "info@globalbrightfutures.org",
};

const categoryTagMap: Record<string, string> = {
  "Student/Families/Educator Support": "Student/Families/Educator Support",
  "Become a Tutor": "Tutor Network",
  "Vendor Application": "Vendor Pipeline",
  "School Partnership": "School Partner",
  "Sponsorship and Corporate Partnership": "Corporate Sponsor",
  "Program Support Inquiry": "Program Inquiry",
  "General Inquiry": "General Inquiry",
};

function buildEmailHtml(category: string, data: Record<string, string>): string {
  const tag = categoryTagMap[category] || category;
  const rows = Object.entries(data)
    .filter(([, v]) => v && v.trim() !== "")
    .map(([key, value]) => {
      return `
        <tr>
          <td style="padding:10px 14px;font-weight:600;color:#374151;background:#f9fafb;border:1px solid #e5e7eb;width:35%;vertical-align:top;">${key}</td>
          <td style="padding:10px 14px;color:#1f2937;border:1px solid #e5e7eb;">${value.replace(/\n/g, "<br/>")}</td>
        </tr>`;
    })
    .join("");

  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:660px;margin:0 auto;background:#ffffff;">
      <div style="background:linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%);padding:36px 32px;border-radius:12px 12px 0 0;text-align:center;">
        <h1 style="color:white;margin:0 0 12px;font-size:22px;font-weight:700;letter-spacing:-0.3px;">New Form Submission</h1>
        <div style="display:inline-block;background:rgba(255,255,255,0.18);color:white;padding:5px 18px;border-radius:20px;font-size:13px;font-weight:600;letter-spacing:0.5px;">${tag}</div>
      </div>
      <div style="padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;">
        <h2 style="font-size:17px;font-weight:700;color:#111827;margin:0 0 20px;">${category}</h2>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
        <div style="margin-top:24px;padding:14px 18px;background:#eff6ff;border-left:4px solid #2563eb;border-radius:4px;">
          <p style="margin:0;font-size:12px;color:#374151;line-height:1.6;">
            This submission was automatically tagged as <strong>${tag}</strong> and routed by the GBFF Smart Intake Form system.
          </p>
        </div>
      </div>
    </div>`;
}

export async function POST(req: Request) {
  try {
    const { category, formData, replyToEmail } = await req.json();

    const targetEmail = categoryEmailMap[category] || "info@globalbrightfutures.org";
    const tag = categoryTagMap[category] || category;
    const htmlBody = buildEmailHtml(category, formData);
    const textBody = Object.entries(formData as Record<string, string>)
      .filter(([, v]) => v && v.trim() !== "")
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Global Bright Futures <noreply@globalbrightfutures.org>",
      to: [targetEmail],
      ...(replyToEmail ? { replyTo: replyToEmail } : {}),
      subject: `[${tag}] New Submission — ${category}`,
      html: htmlBody,
      text: textBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
