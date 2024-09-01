import { Hono } from "hono";
import { getMyInfo } from "../controllers/userController";
import { authMiddleware } from "../middlewares/auth";

const userRoutes = new Hono();

userRoutes.get("/me", authMiddleware, getMyInfo);

export default userRoutes;
