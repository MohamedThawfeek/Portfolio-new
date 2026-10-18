import "dotenv/config";

import cors from "cors";
import express from "express";

import {
  ContactValidationError,
  sendPortfolioEmail,
  validateContactMessage,
} from "./email.js";

const app = express();
const port = Number(process.env.PORT) || 3001;
const allowedOrigin = process.env.CLIENT_ORIGIN || "http://localhost:3000";

app.use(cors({ origin: allowedOrigin }));
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ success: true });
});

app.post("/api/send-email", async (req, res) => {
  try {
    const contactMessage = validateContactMessage(req.body);
    await sendPortfolioEmail(contactMessage);

    res.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    if (error instanceof ContactValidationError) {
      res.status(400).json({ success: false, message: error.message });
      return;
    }

    console.error("Email sending failed:", error);
    res.status(500).json({
      success: false,
      message: "Email sending failed. Please try again later.",
    });
  }
});

app.listen(port, () => {
  console.log(`Email server running at http://localhost:${port}`);
});
