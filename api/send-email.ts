import type { VercelRequest, VercelResponse } from "@vercel/node";

import {
  ContactValidationError,
  sendPortfolioEmail,
  validateContactMessage,
} from "../server/email";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    const contactMessage = validateContactMessage(req.body);
    await sendPortfolioEmail(contactMessage);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    if (error instanceof ContactValidationError) {
      return res.status(400).json({ success: false, message: error.message });
    }

    console.error("Email sending failed:", error);
    return res.status(500).json({
      success: false,
      message: "Email sending failed. Please try again later.",
    });
  }
}
