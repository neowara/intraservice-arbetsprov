// Express router for activities endpoint
import { Router } from "express";
import fs from "fs";
import path from "path";

const activitiesRouter = Router();

// GET /api/activities
// Returns the list of available activities from a static JSON file
activitiesRouter.get("/", (req, res) => {
  // Resolve the path to the activities data file
  const activitiesPath = path.join(
    process.cwd(),
    "src/server/data/activities.json"
  );
  // Read activities from file and return as JSON
  fs.readFile(activitiesPath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Kunde inte läsa aktiviteter." });
    }
    const activities: string[] = JSON.parse(data);
    res.json({ activities });
  });
});

// Export the router for use in the main server
export default activitiesRouter;
