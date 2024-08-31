import { Hono } from "hono";

import {
  getExcercise,
  getExcercisesList,
  postExcercise,
  putExcercise,
  removeExcercise,
} from "../controllers/excerciseController";
import { authMiddleware } from "../middlewares/auth";

const excerciseRoutes = new Hono();

excerciseRoutes.get("/", authMiddleware, getExcercisesList);
excerciseRoutes.get("/:id", authMiddleware, getExcercise);
excerciseRoutes.post("/", authMiddleware, postExcercise);
excerciseRoutes.patch("/:id", authMiddleware, putExcercise);
excerciseRoutes.delete("/:id", authMiddleware, removeExcercise);

export default excerciseRoutes;
