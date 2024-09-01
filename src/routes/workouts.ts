import { Hono } from "hono";
import {
  getReports,
  getWorkoutByID,
  getWorkoutsList,
  postWorkout,
  postWorkoutDetails,
  putWorkout,
  putWorkoutDetails,
  removeWorkout,
  removeWorkoutDetails,
} from "../controllers/workoutController";
import { authMiddleware } from "../middlewares/auth";

const workoutRoutes = new Hono();
// reports
workoutRoutes.get("/reports", authMiddleware, getReports);

workoutRoutes.get("/", authMiddleware, getWorkoutsList);
workoutRoutes.get("/:id", authMiddleware, getWorkoutByID);
workoutRoutes.post("/", authMiddleware, postWorkout);
workoutRoutes.patch("/:id", authMiddleware, putWorkout);
workoutRoutes.delete("/:id", authMiddleware, removeWorkout);

// details
workoutRoutes.post("/:id/details", authMiddleware, postWorkoutDetails);
workoutRoutes.patch(
  "/:id/details/:detailId",
  authMiddleware,
  putWorkoutDetails
);
workoutRoutes.delete(
  "/:id/details/:detailId",
  authMiddleware,
  removeWorkoutDetails
);



export default workoutRoutes;
