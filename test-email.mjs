import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

// Load .env.local manually to make running simple
let apiKey = process.env.RESEND_API_KEY;
let fromEmail = process.env.RESEND_FROM_EMAIL || "Global Bright Futures <noreply@globalbrightfutures.org>";

try {
  const envPath = path.resolve('.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');
    for (const line of lines) {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';
        if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
        if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
        
        if (key === 'RESEND_API_KEY') apiKey = value;
        if (key === 'RESEND_FROM_EMAIL') fromEmail = value;
      }
    }
  }
} catch (e) {
  console.log("Could not read .env.local automatically:", e.message);
}

const targetEmail = process.argv[2];
if (!targetEmail) {
  console.error("Error: Please provide a recipient email address.");
  console.log("Usage: node test-email.mjs <recipient-email>");
  process.exit(1);
}

if (!apiKey) {
  console.error("Error: RESEND_API_KEY is not defined in .env.local or process environment.");
  process.exit(1);
}

console.log(`Using From Email: ${fromEmail}`);
console.log(`Using API Key: ${apiKey.substring(0, 10)}...`);
console.log(`Sending to: ${targetEmail}`);

const resend = new Resend(apiKey);

async function run() {
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [targetEmail],
      subject: "GBFF Resend Test",
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px; max-width: 600px;">
          <h2 style="color: #2563eb;">Resend Test Email</h2>
          <p>This is a diagnostic test email to verify that Resend email delivery is working correctly for your domain.</p>
          <p>If you received this, the Resend integration, API key, and sending domain are configured successfully!</p>
          <hr style="border: none; border-top: 1px solid #eaeaea;" />
          <p style="font-size: 12px; color: #666;">Sent from Global Bright Futures portal test utility.</p>
        </div>
      `
    });
    console.log("\nSuccess! Resend API response:", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("\nError! Failed to send email. Details:");
    console.error(error);
  }
}

run();
