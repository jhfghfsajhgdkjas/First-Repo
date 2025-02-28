import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  idNumber: text("id_number").notNull(),
  picture: text("picture").notNull(), // Base64 encoded image
});

export const insertUserSchema = createInsertSchema(users)
  .omit({ id: true })
  .extend({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().regex(/^\+?[\d\s-]{10,}$/, "Invalid phone number"),
    idNumber: z.string().min(4, "ID number must be at least 4 characters"),
    picture: z.string().min(1, "Picture is required"),
  });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
