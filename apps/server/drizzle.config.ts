import type { Config } from "drizzle-kit";

import { dbCredentials } from "./src/db/credentials";

export default {
  schema: "./src/db/tables.ts",
  out: "./src/db/migrations",
  dialect: "turso",
  dbCredentials,
} satisfies Config;
