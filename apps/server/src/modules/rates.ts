import { db } from "../db";
import { ratesTable } from "../db/tables";
import { extractBcvRate } from "../extractors/bcv/bcv";

export async function updateRates() {
  const bcvRate = await extractBcvRate();

  // TODO: fix type errors
  await db.insert(ratesTable).values({ name: "bcv", rate: bcvRate });
}

// TODO: do pagination
// TODO: support querying different rates
export async function retrieveRatesHistoric() {
  const rates = await db.select().from(ratesTable).all();
  return { rates };
}

export async function retrieveRates() {
  // TODO: query most recent rates
}

export async function retrieveRatesGraph() {
  // TODO: return something we can render in a chart
}
