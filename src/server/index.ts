// Express server entry: sets up API routes and middleware
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import activitiesRouter from "./routes/activities";
import registerRouter from "./routes/register";

// Load environment variables as early as possible
dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

app.use(cors());
app.use(express.json());

app.use("/api/activities", activitiesRouter);
app.use("/api/register", registerRouter);

app.listen(PORT, () => {
  // Use process.env.PORT in the log for clarity
  console.log(
    `Server listening on http://localhost:${process.env.PORT || PORT}`
  );
});
