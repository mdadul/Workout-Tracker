import { eq } from "drizzle-orm";
import { db } from "../config/db";
import { excercisesTable } from "../schema";
import { InsertExcercise, SelectExcercise } from "../schema/excercises";

export async function getExcercises() {
  try {
    const result = db.select().from(excercisesTable);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getExcerciseById(id: SelectExcercise["id"]) {
  try {
    const result = db
      .select()
      .from(excercisesTable)
      .where(eq(excercisesTable.id, id));
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createExcercise(excercise: InsertExcercise) {
  try {
    const result = db.insert(excercisesTable).values(excercise);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateExcercise(
  id: SelectExcercise["id"],
  excercise: Partial<Omit<SelectExcercise, "id">>
) {
  try {
    const result = db
      .update(excercisesTable)
      .set(excercise)
      .where(eq(excercisesTable.id, id));
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteExcercise(id: SelectExcercise['id']) {
  try {
    const result = db.delete(excercisesTable).where(eq(excercisesTable.id, id));
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
