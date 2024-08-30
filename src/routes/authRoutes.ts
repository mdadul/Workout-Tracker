import { Hono } from "hono";
import { loginWithPassword, register } from "../controllers/authController";

const authRoutes = new Hono();

authRoutes.post("/register", register);
authRoutes.post("/login", loginWithPassword);


export default authRoutes;