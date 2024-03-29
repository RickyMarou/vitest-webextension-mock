import { context } from "../src/index";
import { describe, expect, test, vi } from "vitest";

describe("browser.runtime", () => {
  describe("getURL", () => {
    test("returns a URL", async () => {
      expect(vi.isMockFunction(browser.runtime.getURL)).toBe(true);
      expect(browser.runtime.getURL("path")).toBe(
        "chrome-extension://vitest-webextension-mock/path"
      );
    });

    test("changes scheme depending on the context", () => {
      context.browser = "firefox";
      expect(browser.runtime.getURL("path")).toBe(
        "moz-extension://vitest-webextension-mock/path"
      );
    });
  });
});
