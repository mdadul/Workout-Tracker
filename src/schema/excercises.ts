import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const excercisesTable = pgTable("excercises", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category : text("category"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type SelectExcercise = typeof excercisesTable.$inferSelect;
export type InsertExcercise = typeof excercisesTable.$inferInsert;
