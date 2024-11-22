import { db } from "../db";
import { rates } from "../db/tables";
import { extractBcvRate } from "../extractors/bcv/bcv";

export async function updateRates() {
  const bcvRate = await extractBcvRate();

  await db.insert(rates).values({ name: "bcv", rate: bcvRate });
}

export async function retrieveRates() {
  // TODO
}
