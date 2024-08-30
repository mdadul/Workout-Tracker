import { Hono } from "hono";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";

import route from "./routes";

const app = new Hono();
app.use(logger());
app.use(prettyJSON());

app.get("/", (c) => c.text("Hello World!"));
app.route("/", route);

export default app;
