import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const excercisesTable = pgTable("excercises", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  created_at: text("created_at").notNull().default("now()"),
  updated_at: text("updated_at").notNull().default("now()"),
});

export type SelectExcercise = typeof excercisesTable.$inferSelect;
export type InsertExcercise = typeof excercisesTable.$inferInsert;
