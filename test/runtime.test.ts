import { describe, expect, test, vi } from "vitest";

describe("browser.runtime", () => {
  test("getURL", async () => {
    expect(vi.isMockFunction(browser.runtime.getURL)).toBe(true);
    await browser.commands.getAll();
    expect(browser.commands.getAll).toHaveBeenCalledTimes(1);
  });
});
