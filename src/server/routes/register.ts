// Express router for registration endpoint with validation middleware
import { Router, Request, Response, NextFunction } from "express";

// Type definition for expected registration request body
interface RegisterRequestBody {
  name: string;
  email: string;
  activities: string[];
}

// Validation middleware for registration requests
// Ensures all required fields are present and valid before proceeding
function validateRegistration(req: Request, res: Response, next: NextFunction) {
  const { name, email, activities: chosen } = req.body as RegisterRequestBody;
  const errors: string[] = [];

  // Validate name: must be a non-empty string with at least 3 characters
  if (!name || typeof name !== "string" || name.trim().length < 3) {
    errors.push("För- och efternamn måste anges och vara minst 3 tecken.");
  }
  // Validate email: must be a valid email format
  if (
    !email ||
    typeof email !== "string" ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
  ) {
    errors.push("En giltig mailadress måste vara angiven.");
  }
  // Validate activities: must be an array of exactly 3 strings
  if (
    !Array.isArray(chosen) ||
    chosen.length !== 3 ||
    !chosen.every((a) => typeof a === "string")
  ) {
    errors.push("Du måste välja exakt 3 aktiviteter.");
  }

  // If any validation errors, return 400 with error messages
  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }
  next(); // Proceed to next middleware/handler if valid
}

// Create Express router instance for registration
const registerRouter = Router();

// POST /api/register endpoint
// Validates input, then returns success (no DB persistence in this demo)
registerRouter.post(
  "/",
  validateRegistration,
  (req: Request, res: Response) => {
    const { name, email, activities: chosen } = req.body as RegisterRequestBody;
    // Log registration for demonstration purposes
    console.log("Received registration:", req.body);
    res.json({ success: true });
  }
);

// Export the router for use in the main server
export default registerRouter;
