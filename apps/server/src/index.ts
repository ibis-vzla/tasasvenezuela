import { Elysia } from "elysia";

import { updateRatesCron } from "./crons";
import { retrieveRates } from "./modules/rates";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/v1/rates/", retrieveRates)
  // @ts-expect-error ts doesn't know anything
  .use(updateRatesCron)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
