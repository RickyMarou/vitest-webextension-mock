import { describe, expect, test, vi } from "vitest";

describe("browser.commands", () => {
  test("getAll", async () => {
    expect(vi.isMockFunction(browser.commands.getAll)).toBe(true);
    await browser.commands.getAll();
    expect(browser.commands.getAll).toHaveBeenCalledTimes(1);
  });
});
