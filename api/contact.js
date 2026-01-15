import nodemailer from 'nodemailer';

// In-memory store for rate limiting (serverless, works per instance)
const submissionTracker = new Map();
const RATE_LIMIT = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    // Rate limiting
    const identifier = email + (phone || '');
    const now = Date.now();
    const submissions = submissionTracker.get(identifier) || [];
    const recentSubmissions = submissions.filter(time => now - time < RATE_LIMIT_WINDOW);

    if (recentSubmissions.length >= RATE_LIMIT) {
      return res.status(429).json({
        message: 'Too many submissions. Please wait before sending another message.'
      });
    }

    recentSubmissions.push(now);
    submissionTracker.set(identifier, recentSubmissions);

    // ✅ Correct transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Must be set in Vercel environment
        pass: process.env.EMAIL_PASS  // Must be Gmail App Password
      }
    });

    const emailContent = `
New Contact Form Submission
===========================

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}

Message:
${message}

Submitted at: ${new Date().toLocaleString()}
`;

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'vigljku@gmail.com', // Your destination email
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      html: `
<h2>New Contact Form Submission</h2>
<div style="background: #f5f5f5; padding: 20px; border-radius: 8px; font-family: Arial, sans-serif;">
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
  <p><strong>Company:</strong> ${company || 'Not provided'}</p>
  <hr>
  <p><strong>Message:</strong></p>
  <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
    ${message.replace(/\n/g, '<br>')}
  </div>
  <hr>
  <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toLocaleString()}</p>
</div>
`
    });

    res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
