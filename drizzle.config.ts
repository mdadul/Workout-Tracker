import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
import { dbUrl } from "./src/constant/variable";

config({ path: ".env" });

export default defineConfig({
  schema: "./src/schema/index.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl,
  },
});
