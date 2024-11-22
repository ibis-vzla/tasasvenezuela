import { sql } from "drizzle-orm";
import { sqliteTable, real, text } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";

export const rates = sqliteTable("rates", {
  id: text().$defaultFn(() => createId()),
  name: text().notNull(),
  rate: real().notNull(),
  createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
});
