import { eq } from "drizzle-orm";
import { SelectUser, usersTable } from "../schema/users";
import { db } from "../config/db";
import { excercisesTable } from "../schema";
import { SelectWorkout, workoutsTable } from "../schema/workouts";

export async function getuserById(id: SelectUser["id"]): Promise<
  Array<{
    id: SelectUser["id"];
    name: SelectUser["name"];
    email: SelectUser["email"];
    created_at: SelectUser["created_at"];
    updatedAt: SelectUser["updatedAt"];
  }>
> {
  try {
    const result = db.select().from(usersTable).where(eq(usersTable.id, id));
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getuserByEmail(email: SelectUser["email"]): Promise<
  Array<{
    id: SelectUser["id"];
    name: SelectUser["name"];
    email: SelectUser["email"];
    created_at: SelectUser["created_at"];
    updatedAt: SelectUser["updatedAt"];
  }>
> {
  try {
    const result = db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getExcercises() {
  try {
    const result = db.select().from(excercisesTable);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getWorkoutsByUserId(userId: SelectWorkout["createdBy"]) {
  try {
    const result = db
      .select()
      .from(workoutsTable)
      .where(eq(workoutsTable.createdBy, userId));
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getWorkoutByerrorId(workoutId: SelectWorkout["id"]) {
  const result = db
    .select()
    .from(workoutsTable)
    .where(eq(workoutsTable.id, workoutId));
  return result;
}

export async function getWorkoutByDate(date: SelectWorkout["created_at"]) {
  const result = db
    .select()
    .from(workoutsTable)
    .where(eq(workoutsTable.created_at, date));
  return result;
}
