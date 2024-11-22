import { ENV } from "../env";

export const dbUrl = ENV.TURSO_DATABASE_URL
  ? ENV.TURSO_DATABASE_URL
  : "file:local.db";

export const dbCredentials = {
  url: dbUrl,
  ...(dbUrl !== "file:local.db" ? {} : { authToken: ENV.TURSO_AUTH_TOKEN }),
};
