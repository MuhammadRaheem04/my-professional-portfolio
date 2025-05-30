import { NextResponse } from "next/server";
import { z } from "zod";
import mail from "@sendgrid/mail";

// Initialize SendGrid with API key
const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  console.error("SENDGRID_API_KEY is not set in environment variables");
} else {
  mail.setApiKey(apiKey);
}

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export async function POST(request: Request) {
  try {
    // Extract and validate form data
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    // Check if SendGrid API key is set
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Construct message
    const msg = {
      to: "raheemshar59@gmail.com", // Your email address
      from: {
        email: "raheemshar59@gmail.com", // sender
        name: "Muhammad Raheem Portfolio",
      }, // Must be verified in SendGrid
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4F46E5;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  </div>
  <p style="color: #6c757d; font-size: 12px; margin-top: 30px;">
    This email was sent from your portfolio website contact form.
  </p>
</div>
      `,
    };

    // Send email
    await mail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error?.response?.body || error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
