import { Hono } from "hono";
import excerciseRoutes from "./excerciseRoutes";
import userRoutes from "./userRoutes";
import workoutRoutes from "./workouts";
import authRoutes from "./authRoutes";

const route = new Hono();

route.route("/auth", authRoutes);
route.route("/users", userRoutes);
route.route("/excercise", excerciseRoutes);
route.route("/workouts", workoutRoutes);

export default route;
