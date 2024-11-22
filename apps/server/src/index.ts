import { Elysia } from "elysia";

import { updateRatesCron } from "./crons";
import {
  retrieveRates,
  retrieveRatesHistoric,
  retrieveRatesGraph,
} from "./modules/rates";

const app = new Elysia()
  .get("/", () => "Hello TasasVenezuela")
  .get("/v1/rates/", retrieveRates)
  .get("/v1/rates/historic", retrieveRatesHistoric)
  .get("/v1/rates/graph", retrieveRatesGraph)
  // @ts-expect-error ts doesn't know anything
  .use(updateRatesCron)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
