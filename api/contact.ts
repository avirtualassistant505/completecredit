import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string; // honeypot
};

function isValidEmail(email: string) {
  // pragmatic, not exhaustive
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ ok: false, error: 'Server is not configured' });
  }

  const to = process.env.CONTACT_TO_EMAIL || process.env.VITE_CONTACT_EMAIL;
  if (!to) {
    return res.status(500).json({ ok: false, error: 'Missing recipient email' });
  }

  const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

  let body: ContactPayload = {};
  try {
    body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as ContactPayload;
  } catch {
    return res.status(400).json({ ok: false, error: 'Invalid JSON' });
  }

  // Honeypot: if filled, pretend success.
  if (body.website && body.website.trim().length > 0) {
    return res.status(200).json({ ok: true });
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const phone = (body.phone || '').trim();
  const message = (body.message || '').trim();

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email' });
  }

  const subject = `New contact form message from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : 'Phone: -',
    '',
    message
  ].join('\n');

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.5;">
      <h2 style="margin: 0 0 12px;">New Contact Message</h2>
      <p style="margin: 0 0 6px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 6px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin: 0 0 12px;"><strong>Phone:</strong> ${escapeHtml(phone || '-')}</p>
      <div style="padding: 12px 14px; border: 1px solid #e5e7eb; border-radius: 12px; background: #f9fafb; white-space: pre-wrap;">${escapeHtml(message)}</div>
    </div>
  `;

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email,
      text,
      html
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
