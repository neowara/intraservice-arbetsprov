// Activities API route: returns available activities from JSON file
import { Router } from "express";
import fs from "fs";
import path from "path";

const activitiesRouter = Router();

activitiesRouter.get("/", (req, res) => {
  // Use process.cwd() to get the project root, then resolve to data/activities.json
  const activitiesPath = path.join(
    process.cwd(),
    "src/server/data/activities.json"
  );
  fs.readFile(activitiesPath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Kunde inte läsa aktiviteter." });
    }
    const activities: string[] = JSON.parse(data);
    res.json({ activities });
  });
});

export default activitiesRouter;
