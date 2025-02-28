import type { Express } from "express";
import { createServer } from "http";
import userRoutes from "./users";

export async function registerRoutes(app: Express) {
  // Register API routes
  app.use("/api/users", userRoutes);

  return createServer(app);
}
