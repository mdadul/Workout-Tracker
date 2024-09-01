import { Hono } from "hono";
import { getUser } from "../controllers/userController";
import { authMiddleware } from "../middlewares/auth";

const userRoutes = new Hono();

userRoutes.get("/", authMiddleware, getUser);

export default userRoutes;
