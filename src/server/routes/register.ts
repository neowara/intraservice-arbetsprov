// Registration API route: validates and accepts camp registration
import { Router, Request, Response, NextFunction } from "express";

// Types for registration request body
interface RegisterRequestBody {
  name: string;
  email: string;
  activities: string[];
}

// Validation middleware with types
function validateRegistration(req: Request, res: Response, next: NextFunction) {
  const { name, email, activities: chosen } = req.body as RegisterRequestBody;
  const errors: string[] = [];

  if (!name || typeof name !== "string" || name.trim().length < 3) {
    errors.push("För- och efternamn måste anges och vara minst 3 tecken.");
  }
  if (
    !email ||
    typeof email !== "string" ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
  ) {
    errors.push("En giltig mailadress måste vara angiven.");
  }
  if (
    !Array.isArray(chosen) ||
    chosen.length !== 3 ||
    !chosen.every((a) => typeof a === "string")
  ) {
    errors.push("Du måste välja exakt 3 aktiviteter.");
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }
  next();
}

const registerRouter = Router();

registerRouter.post(
  "/",
  validateRegistration,
  (req: Request, res: Response) => {
    const { name, email, activities: chosen } = req.body as RegisterRequestBody;
    console.log("Received registration:", req.body);
    // Simulate success
    res.json({ success: true });
  }
);

export default registerRouter;
