import { Router } from "express";
import { storage } from "../storage";
import { insertUserSchema } from "@shared/schema";

const router = Router();

router.get("/", async (_req, res) => {
  const users = await storage.getUsers();
  res.json(users);
});

router.post("/", async (req, res) => {
  const result = insertUserSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: "Invalid input" });
  }
  const user = await storage.createUser(result.data);
  res.status(201).json(user);
});

router.patch("/:id", async (req, res) => {
  const result = insertUserSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: "Invalid input" });
  }
  try {
    const user = await storage.updateUser(parseInt(req.params.id), result.data);
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: "User not found" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await storage.deleteUser(parseInt(req.params.id));
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ message: "User not found" });
  }
});

export default router;
