import { cron, Patterns } from "@elysiajs/cron";

import { updateRates } from "./modules/rates";

export const updateRatesCron = cron({
  name: "update-rates",
  pattern: Patterns.EVERY_5_MINUTES,
  async run() {
    await updateRates();
  },
});

updateRates();
