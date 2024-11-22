import { describe, it, expect, spyOn } from "bun:test";

import * as bcv from "./bcv";
import { html } from "./bcv.mock-data";

describe("extractBcvRate", () => {
  it("should be able to extract bcv rate", async () => {
    spyOn(bcv, "getBcvPageHtml").mockImplementationOnce(() =>
      Promise.resolve(html)
    );

    const response = await bcv.extractBcvRate();

    expect(response).toBe(46.3273);
  });
});
