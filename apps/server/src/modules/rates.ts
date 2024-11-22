import { extractBcvRate } from "../extractors/bcv/bcv";

export async function updateRates() {
  const bcvRate = await extractBcvRate();
  // TODO: update rates in the database
}
