// Express server entry point: sets up API routes and middleware
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import activitiesRouter from "./routes/activities";
import registerRouter from "./routes/register";

// Load environment variables from .env file
dotenv.config();

const app = express();
// Use PORT from environment or default to 3001
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Mount API routes
app.use("/api/activities", activitiesRouter);
app.use("/api/register", registerRouter);

// Start the server
app.listen(PORT, () => {
  // Log the server URL for convenience
  console.log(
    `Server listening on http://localhost:${process.env.PORT || PORT}`
  );
});
