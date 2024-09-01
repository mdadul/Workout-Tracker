import { and, eq } from "drizzle-orm";
import { db } from "../config/db";
import {
  InsertWorkout,
  SelectWorkout,
  workoutsTable,
} from "../schema/workouts";
import {
  InsertWorkoutDetails,
  SelectWorkoutDetails,
  workoutDetailsTable,
} from "../schema/workoutDetails";
import { excercisesTable } from "../schema";

export async function getWorkoutsListByUserId(
  userId: SelectWorkout["createdBy"]
) {
  try {
    const result = db
      .select()
      .from(workoutsTable)
      .leftJoin(
        workoutDetailsTable,
        eq(workoutsTable.id, workoutDetailsTable.workoutId)
      )
      .where(eq(workoutsTable.createdBy, userId))
      .orderBy(workoutsTable.created_at);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function workoutById(
  id: SelectWorkout["id"],
  userId: SelectWorkout["createdBy"]
) {
  try {
    const workout = await db
      .select()
      .from(workoutsTable)
      .where(
        and(eq(workoutsTable.id, id), eq(workoutsTable.createdBy, userId))
      );
    const details = await db
      .select({
        id: workoutDetailsTable.id,
        sets: workoutDetailsTable.sets,
        reps: workoutDetailsTable.reps,
        rest: workoutDetailsTable.rest,
        excercise: {
          id: excercisesTable.id,
          name: excercisesTable.name,
          category: excercisesTable.category

        },
      })
      .from(workoutDetailsTable)
      .leftJoin(
        excercisesTable,
        eq(workoutDetailsTable.excerciseId, excercisesTable.id)
      )
      .where(
        and(
          eq(workoutDetailsTable.workoutId, id),
          eq(workoutDetailsTable.createdBy, userId)
        )
      );
    const data = {
      ...workout[0],
      details,
    };
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function postWorkoutService(workout: InsertWorkout) {
  try {
    const result = await db.insert(workoutsTable).values(workout);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function putWorkoutService(
  workout: InsertWorkout,
  workoutId: SelectWorkout["id"]
) {
  try {
    const result = await db
      .update(workoutsTable)
      .set(workout)
      .where(
        and(
          eq(workoutsTable.id, workoutId),
          eq(workoutsTable.createdBy, workout.createdBy)
        )
      );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function removeWorkoutService(
  workoutId: SelectWorkout["id"],
  userId: SelectWorkout["createdBy"]
) {
  try {
    // delete workout details first
    await db
      .delete(workoutDetailsTable)
      .where(
        and(
          eq(workoutDetailsTable.workoutId, workoutId),
          eq(workoutDetailsTable.createdBy, userId)
        )
      );

    // delete workout

    const result = await db
      .delete(workoutsTable)
      .where(
        and(
          eq(workoutsTable.id, workoutId),
          eq(workoutsTable.createdBy, userId)
        )
      );

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function InsertWorkoutDetailsService(
  details: InsertWorkoutDetails
) {
  try {
    const result = await db.insert(workoutDetailsTable).values(details);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function putWorkoutDetailsService(
  details: InsertWorkoutDetails,
  detailId: SelectWorkoutDetails["id"]
) {
  try {
    const result = await db
      .update(workoutDetailsTable)
      .set(details)
      .where(eq(workoutDetailsTable.id, detailId));
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function removeWorkoutDetailsService(
  detailId: SelectWorkoutDetails["id"],
  userId: SelectWorkoutDetails["createdBy"]
) {
  try {
    const result = await db
      .delete(workoutDetailsTable)
      .where(
        and(
          eq(workoutDetailsTable.id, detailId),
          eq(workoutDetailsTable.createdBy, userId)
        )
      );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
