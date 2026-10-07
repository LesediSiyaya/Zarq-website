import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-e72b99af/health", (c) => {
  return c.json({
    status: "ok",
    hasResendKey: !!Deno.env.get('RESEND_API_KEY'),
    timestamp: new Date().toISOString()
  });
});

// Contact form submission endpoint
app.post("/make-server-e72b99af/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, interest, message } = body;

    // Validate required fields
    if (!name || !email || !interest) {
      return c.json({ error: "Missing required fields: name, email, and interest are required" }, 400);
    }

    // Create submission record
    const timestamp = new Date().toISOString();
    const submissionId = `submission_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const submission = {
      id: submissionId,
      name,
      email,
      phone: phone || '',
      interest,
      message: message || '',
      timestamp,
      status: 'new'
    };

    // Save to KV store
    await kv.set(submissionId, submission);

    // Send email notification via Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');

    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured - skipping email notification');
      return c.json({
        success: true,
        message: 'Form submitted successfully (email notification not configured)',
        submissionId,
        warning: 'RESEND_API_KEY not found in environment variables'
      });
    }

    console.log('Attempting to send email notification via Resend...');

    try {
      const emailPayload = {
        from: 'Zarq <onboarding@resend.dev>',
        to: ['admin.zarq@gmail.com'],
        reply_to: email,
        subject: `New ${interest} Inquiry - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <p><strong>Submission ID:</strong> ${submissionId}</p>
            <p><strong>Timestamp:</strong> ${new Date(timestamp).toLocaleString()}</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0;"><strong>Name:</strong></td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Email:</strong></td>
                <td style="padding: 8px 0;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Interest:</strong></td>
                <td style="padding: 8px 0;">${interest}</td>
              </tr>
            </table>
            ${message ? `
              <div style="margin-top: 20px;">
                <strong>Message:</strong>
                <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">${message}</p>
              </div>
            ` : ''}
          </div>
        `,
      };

      console.log('Email payload:', JSON.stringify({ ...emailPayload, to: emailPayload.to }));

      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      const emailResponseText = await emailResponse.text();

      if (!emailResponse.ok) {
        console.error(`Email sending failed with status ${emailResponse.status}`);
        console.error('Response body:', emailResponseText);

        let errorDetails;
        try {
          errorDetails = JSON.parse(emailResponseText);
        } catch {
          errorDetails = emailResponseText;
        }

        return c.json({
          success: true,
          message: 'Form submitted successfully but email notification failed',
          submissionId,
          emailError: {
            status: emailResponse.status,
            details: errorDetails
          }
        });
      }

      let emailData;
      try {
        emailData = JSON.parse(emailResponseText);
      } catch {
        emailData = emailResponseText;
      }

      console.log('Email sent successfully! Email ID:', emailData);

      return c.json({
        success: true,
        message: 'Form submitted successfully and email notification sent',
        submissionId,
        emailId: emailData.id || emailData
      });

    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      console.error('Error stack:', emailError.stack);
      return c.json({
        success: true,
        message: 'Form submitted successfully but email notification failed',
        submissionId,
        emailError: {
          message: emailError.message,
          stack: emailError.stack
        }
      });
    }

  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return c.json({
      error: 'Failed to process form submission',
      details: error.message
    }, 500);
  }
});

// Get all submissions (optional - for viewing submissions)
app.get("/make-server-e72b99af/submissions", async (c) => {
  try {
    const submissions = await kv.getByPrefix('submission_');
    return c.json({ submissions });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return c.json({ error: 'Failed to fetch submissions', details: error.message }, 500);
  }
});

Deno.serve(app.fetch);