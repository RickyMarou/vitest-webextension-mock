import { describe, expect, test, vi } from "vitest";
import { context } from "../src/index";

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

  describe("setIcon()", () => {
    test("throws if both windowId an tabId are provided", async () => {
      expect(vi.isMockFunction(browser.action.setIcon)).toBe(true);
      expect(
        browser.action.setIcon({ windowId: 1, tabId: 1, path: "path" })
      ).rejects.toThrow();
    });

    test("does not return anything if one of windowId or tabId is provided", async () => {
      expect(vi.isMockFunction(browser.action.setIcon)).toBe(true);
      expect(
        browser.action.setIcon({ windowId: 1, path: "path" })
      ).resolves.toBeUndefined();
      expect(
        browser.action.setIcon({ tabId: 1, path: "path" })
      ).resolves.toBeUndefined();
    });
  });

  describe("setPopup()", () => {
    test("throws if both windowId an tabId are provided", async () => {
      expect(vi.isMockFunction(browser.action.setPopup)).toBe(true);
      expect(
        browser.action.setPopup({ windowId: 1, tabId: 1, popup: "popup" })
      ).rejects.toThrow();
    });

    test("throws if context.manifest is not v3", async () => {
      context.manifest = "v2";
      expect(
        browser.action.setPopup({ windowId: 1, popup: "popup" })
      ).rejects.toThrow();
    });

    test("does not return anything if one of windowId or tabId is provided", async () => {
      expect(vi.isMockFunction(browser.action.setPopup)).toBe(true);
      expect(
        browser.action.setPopup({ windowId: 1, popup: "popup" })
      ).resolves.toBeUndefined();
      expect(
        browser.action.setPopup({ tabId: 1, popup: "popup" })
      ).resolves.toBeUndefined();
    });
  });

  describe("getPopup", () => {
    test("throws if both windowId an tabId are provided", async () => {
      expect(vi.isMockFunction(browser.action.getPopup)).toBe(true);
      expect(
        browser.action.getPopup({ windowId: 1, tabId: 1 })
      ).rejects.toThrow();
    });

    test("returns a popup URL", async () => {
      expect(vi.isMockFunction(browser.action.getPopup)).toBe(true);
      expect(browser.action.getPopup({ windowId: 1 })).resolves.toBe(
        "chrome-extension://vitest-webextension-mock/popup.html"
      );
      expect(browser.action.getPopup({ tabId: 1 })).resolves.toBe(
        "chrome-extension://vitest-webextension-mock/popup.html"
      );

      expect(browser.action.getPopup({})).resolves.toBe(
        "chrome-extension://vitest-webextension-mock/popup.html"
      );
    });
  });

  describe("setBadgeText()", () => {
    test("throws if both windowId an tabId are provided", async () => {
      expect(vi.isMockFunction(browser.action.setBadgeText)).toBe(true);
      expect(
        browser.action.setBadgeText({ windowId: 1, tabId: 1, text: "text" })
      ).rejects.toThrow();
    });

    test("does not return anything if one of windowId or tabId is provided", async () => {
      expect(vi.isMockFunction(browser.action.setBadgeText)).toBe(true);
      expect(
        browser.action.setBadgeText({ windowId: 1, text: "text" })
      ).resolves.toBeUndefined();
      expect(
        browser.action.setBadgeText({ tabId: 1, text: "text" })
      ).resolves.toBeUndefined();
      expect(
        browser.action.setBadgeText({ text: "text" })
      ).resolves.toBeUndefined();
    });
  });

  describe("getBadgeText()", () => {
    test("throws if both windowId an tabId are provided", async () => {
      expect(vi.isMockFunction(browser.action.getBadgeText)).toBe(true);
      expect(
        browser.action.getBadgeText({ windowId: 1, tabId: 1 })
      ).rejects.toThrow();
    });

    test("throws if context.manifest is not v3", async () => {
      context.manifest = "v2";
      expect(browser.action.getBadgeText({ windowId: 1 })).rejects.toThrow();
    });

    test("returns a badge text", async () => {
      expect(vi.isMockFunction(browser.action.getBadgeText)).toBe(true);
      expect(browser.action.getBadgeText({ windowId: 1 })).resolves.toBe(
        "mocked badge text"
      );
      expect(browser.action.getBadgeText({ tabId: 1 })).resolves.toBe(
        "mocked badge text"
      );

      expect(browser.action.getBadgeText({})).resolves.toBe(
        "mocked badge text"
      );
    });
  });

  describe("setBadgeBackgroundColor()", () => {
    test("throws if both windowId an tabId are provided", async () => {
      expect(vi.isMockFunction(browser.action.setBadgeBackgroundColor)).toBe(
        true
      );
      expect(
        browser.action.setBadgeBackgroundColor({
          windowId: 1,
          tabId: 1,
          color: "hotpink",
        })
      ).rejects.toThrow();
    });

    test("throws if context.manifest is not v3", async () => {
      context.manifest = "v2";
      expect(
        browser.action.setBadgeBackgroundColor({
          windowId: 1,
          color: "hotpink",
        })
      ).rejects.toThrow();
    });

    test("does not return anything if one of windowId or tabId is provided", async () => {
      expect(vi.isMockFunction(browser.action.setBadgeBackgroundColor)).toBe(
        true
      );
      expect(
        browser.action.setBadgeBackgroundColor({
          windowId: 1,
          color: [0, 0, 0, 0],
        })
      ).resolves.toBeUndefined();
    });
  });

  describe("getBadgeBackgroundColor", () => {
    test("throws if both windowId an tabId are provided", async () => {
      expect(vi.isMockFunction(browser.action.getBadgeBackgroundColor)).toBe(
        true
      );
      expect(
        browser.action.getBadgeBackgroundColor({ windowId: 1, tabId: 1 })
      ).rejects.toThrow();
    });

    test("returns a badge background color", async () => {
      expect(vi.isMockFunction(browser.action.getBadgeBackgroundColor)).toBe(
        true
      );
      expect(
        browser.action.getBadgeBackgroundColor({ windowId: 1 })
      ).resolves.toEqual([0, 0, 0, 0]);
      expect(
        browser.action.getBadgeBackgroundColor({ tabId: 1 })
      ).resolves.toEqual([0, 0, 0, 0]);

      expect(browser.action.getBadgeBackgroundColor({})).resolves.toEqual([
        0, 0, 0, 0,
      ]);
    });
  });

  describe("enable()", () => {
    test("is defined", () => {
      expect(vi.isMockFunction(browser.action.enable)).toBe(true);
    });
  });

  describe("disable()", () => {
    test("is defined", () => {
      expect(vi.isMockFunction(browser.action.disable)).toBe(true);
    });
  });

  describe("getBadgeTextColor()", () => {
    test("throws if both windowId an tabId are provided", async () => {
      expect(vi.isMockFunction(browser.action.getBadgeTextColor)).toBe(true);
      expect(
        browser.action.getBadgeTextColor({ windowId: 1, tabId: 1 })
      ).rejects.toThrow();
    });

    test("throws if context.manifest is not v3", async () => {
      context.manifest = "v2";
      expect(
        browser.action.getBadgeTextColor({ windowId: 1 })
      ).rejects.toThrow();
    });

    test("returns a badge text color", async () => {
      expect(vi.isMockFunction(browser.action.getBadgeTextColor)).toBe(true);
      expect(
        browser.action.getBadgeTextColor({ windowId: 1 })
      ).resolves.toEqual([0, 0, 0, 0]);
      expect(browser.action.getBadgeTextColor({ tabId: 1 })).resolves.toEqual([
        0, 0, 0, 0,
      ]);

      expect(browser.action.getBadgeTextColor({})).resolves.toEqual([
        0, 0, 0, 0,
      ]);
    });
  });

  describe("getUserSettings()", () => {
    test("throws if context.manifest is not v3", async () => {
      context.manifest = "v2";
      expect(browser.action.getUserSettings()).rejects.toThrow();
    });

    test("returns user settings", async () => {
      expect(browser.action.getUserSettings()).resolves.toEqual({
        isOnToolbar: false,
      });
    });
  });
});
