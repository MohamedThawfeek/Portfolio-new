import nodemailer from "nodemailer";

export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export class ContactValidationError extends Error {}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function requiredText(
  value: unknown,
  field: string,
  maxLength: number,
): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new ContactValidationError(`${field} is required.`);
  }

  const normalizedValue = value.trim();

  if (normalizedValue.length > maxLength) {
    throw new ContactValidationError(
      `${field} must be ${maxLength} characters or fewer.`,
    );
  }

  return normalizedValue;
}

export function validateContactMessage(input: unknown): ContactMessage {
  if (!input || typeof input !== "object") {
    throw new ContactValidationError("Invalid request body.");
  }

  const body = input as Record<string, unknown>;
  const name = requiredText(body.name, "Name", 100);
  const email = requiredText(body.email, "Email", 254);
  const subject = requiredText(body.subject, "Subject", 150);
  const message = requiredText(body.message, "Message", 5_000);

  if (!EMAIL_PATTERN.test(email)) {
    throw new ContactValidationError("Please enter a valid email address.");
  }

  return { name, email, subject, message };
}

export async function sendPortfolioEmail({
  name,
  email,
  subject,
  message,
}: ContactMessage): Promise<void> {
  const env = (
    globalThis as typeof globalThis & {
      process?: { env?: Record<string, string | undefined> };
    }
  ).process?.env ?? {};
  const emailUser = env.EMAIL_USER;
  const emailPassword = env.EMAIL_APP_PASSWORD;
  const emailRecipient = env.EMAIL_TO || emailUser;

  if (!emailUser || !emailPassword || !emailRecipient) {
    throw new Error("Email server environment variables are not configured.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });

  await transporter.sendMail({
    from: `Portfolio Contact Form <${emailUser}>`,
    to: emailRecipient,
    replyTo: { name, address: email },
    subject: `Portfolio message: ${subject.replace(/[\r\n]+/g, " ")}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
  });
}
