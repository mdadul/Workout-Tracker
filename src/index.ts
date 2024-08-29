import { Hono } from "hono";
import { getuserById } from "./queries/select";

const app = new Hono();

app.get("/:id", (c) => {
  const id = c.req.param("id");
  return c.json({
    success: true,
    data: getuserById(id),
  });
});

export default app;
