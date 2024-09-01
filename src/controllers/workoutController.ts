import { Context } from "hono";
import {
  getWorkoutProgressByUserId,
  getWorkoutsListByUserId,
  InsertWorkoutDetailsService,
  postWorkoutService,
  putWorkoutDetailsService,
  putWorkoutService,
  removeWorkoutDetailsService,
  removeWorkoutService,
  workoutById,
} from "../services/workoutService";

export const getWorkoutsList = async (c: Context) => {
  const userId = c.get("userId");

  try {
    const workoutList = await getWorkoutsListByUserId(userId);
    return c.json({ success: true, data: workoutList }, 200);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message });
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};

export const getWorkoutByID = async (c: Context) => {
  const userId = c.get("userId");
  const workoutId = parseInt(c.req.param("id"));

  try {
    const workout = await workoutById(workoutId, userId);

    if (!workout || workout.details.length === 0) {
      return c.json({ success: false, message: "Workout not found" }, 404);
    }
    return c.json({ success: true, data: workout }, 200);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message });
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};

export const postWorkout = async (c: Context) => {
  const userId = c.get("userId");
  const workout = await c.req.json();

  workout.createdBy = userId;

  try {
    const result = await postWorkoutService(workout);
    return c.json({ success: true, data: result }, 201);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message });
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};

export const putWorkout = async (c: Context) => {
  const userId = c.get("userId");
  const workout = await c.req.json();
  const workoutId = parseInt(c.req.param("id"));

  workout.createdBy = userId;

  try {
    const result = await putWorkoutService(workout, workoutId);
    return c.json({ success: true, data: result }, 200);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message });
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};

export const removeWorkout = async (c: Context) => {
  const userId = c.get("userId");
  const workoutId = parseInt(c.req.param("id"));

  try {
    const result = await removeWorkoutService(workoutId, userId);
    return c.json({ success: true, data: result }, 200);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message });
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};

export const postWorkoutDetails = async (c: Context) => {
  const userId = c.get("userId");
  const workoutId = parseInt(c.req.param("id"));
  const details = await c.req.json();

  details.workoutId = workoutId;
  details.createdBy = userId;

  try {
    const result = await InsertWorkoutDetailsService(details);
    return c.json({ success: true, data: result }, 201);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message });
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};

export const putWorkoutDetails = async (c: Context) => {
  const userId = c.get("userId");
  const workoutId = parseInt(c.req.param("id"));
  const detailId = parseInt(c.req.param("detailId"));
  const details = await c.req.json();

  details.workoutId = workoutId;
  details.createdBy = userId;

  try {
    const result = await putWorkoutDetailsService(details, detailId);
    return c.json({ success: true, data: result }, 201);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message });
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};

export const removeWorkoutDetails = async (c: Context) => {
  const userId = c.get("userId");
  const workoutId = parseInt(c.req.param("id"));
  const detailId = parseInt(c.req.param("detailId"));

  try {
    const result = await removeWorkoutDetailsService(detailId, userId);
    return c.json({ success: true, data: result }, 200);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message });
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};

export const getReports = async (c: Context) => {
  const userId = c.get("userId");

  try {
    const workoutList = await getWorkoutProgressByUserId(userId);
    return c.json({ success: true, data: workoutList }, 200);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message });
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};
