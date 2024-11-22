import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

import { dbCredentials } from "./credentials";

const client = createClient(dbCredentials);

export const db = drizzle(client);
