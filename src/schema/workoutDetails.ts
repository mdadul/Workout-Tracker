import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { excercisesTable } from "./excercises";
import { workoutsTable } from "./workouts";

export const workoutDetailsTable = pgTable("workout_details", {
  id: serial("id").primaryKey(),
  workoutId: integer("workout_id").notNull().references(() => workoutsTable.id),
  excerciseId: integer("excercise_id")
    .notNull()
    .references(() => excercisesTable.id),
  sets: integer("sets").notNull(),
  reps: text("reps").notNull(),
  rest: integer("rest").notNull(),
});

export type SelectWorkoutDetails = typeof workoutDetailsTable.$inferSelect;
export type InsertWorkoutDetails = typeof workoutDetailsTable.$inferInsert;