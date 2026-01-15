import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Validate required env variables at startup
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ EMAIL_USER or EMAIL_PASS not set in .env file");
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// In-memory store for rate limiting (use Redis/DB in production)
const submissionTracker = new Map();

// Rate limiting config
const RATE_LIMIT = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

// Create transporter ONCE (best practice)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact form endpoint
app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email, and message are required",
      });
    }

    // Rate limiting
    const identifier = email + (phone || "");
    const now = Date.now();
    const submissions = submissionTracker.get(identifier) || [];

    const recentSubmissions = submissions.filter(
      (time) => now - time < RATE_LIMIT_WINDOW
    );

    if (recentSubmissions.length >= RATE_LIMIT) {
      return res.status(429).json({
        message:
          "Too many submissions. Please wait before sending another message.",
      });
    }

    recentSubmissions.push(now);
    submissionTracker.set(identifier, recentSubmissions);

    // Email content
    const emailText = `
New Contact Form Submission
===========================

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}

Message:
${message}

===========================
Submitted at: ${new Date().toLocaleString()}
`;

    // Send email
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: emailText,
      html: `
        <h2>New Contact Form Submission</h2>
        <div style="background:#f5f5f5;padding:20px;border-radius:8px;font-family:Arial">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <div style="background:white;padding:15px;border-radius:5px">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <hr />
          <p style="font-size:12px;color:#666">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    console.log("✅ Email sent:", {
      name,
      email,
      timestamp: new Date().toISOString(),
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "Server is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Contact API server running on port ${PORT}`);
});
