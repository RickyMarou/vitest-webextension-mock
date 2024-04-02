import { describe, expect, test, vi } from "vitest";

describe("browser.action", () => {
  describe("getTitle()", () => {
    test("throws if both windowId an tabId are provided", async () => {
      expect(vi.isMockFunction(browser.action.getTitle)).toBe(true);
      expect(
        browser.action.getTitle({ windowId: 1, tabId: 1 })
      ).rejects.toThrow();
    });

    test("returns a title if one of windowId or tabId is provided", async () => {
      expect(vi.isMockFunction(browser.action.getTitle)).toBe(true);
      expect(browser.action.getTitle({ windowId: 1 })).resolves.toBe(
        "mocked title"
      );
      expect(browser.action.getTitle({ tabId: 1 })).resolves.toBe(
        "mocked title"
      );
    });

    test("returns a title if neither windowId nor tabId is provided", async () => {
      expect(vi.isMockFunction(browser.action.getTitle)).toBe(true);
      expect(browser.action.getTitle({})).resolves.toBe("mocked title");
    });
  });

  describe("setTitle()", () => {
    test("throws if both windowId an tabId are provided", async () => {
      expect(vi.isMockFunction(browser.action.setTitle)).toBe(true);
      expect(
        browser.action.setTitle({ windowId: 1, tabId: 1, title: "title" })
      ).rejects.toThrow();
    });

    test("does not return anything if one of windowId or tabId is provided", async () => {
      expect(vi.isMockFunction(browser.action.setTitle)).toBe(true);
      expect(
        browser.action.setTitle({ windowId: 1, title: "title" })
      ).resolves.toBeUndefined();
      expect(
        browser.action.setTitle({ tabId: 1, title: "title" })
      ).resolves.toBeUndefined();
    });
  });
});
