import { pgTable, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { usersTable } from "./users";

export const workoutsTable = pgTable("workouts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  status: text("status").notNull().default("active"),
  comment: text("comment"),
  schedule: timestamp("schedule").defaultNow(),
  createdBy: uuid("createdBy")
    .notNull()
    .references(() => usersTable.id),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type SelectWorkout = typeof workoutsTable.$inferSelect;
export type InsertWorkout = typeof workoutsTable.$inferInsert;
