import { vi } from "vitest";
import { action } from "./action";
import { type Runtime } from "webextension-polyfill";

interface TestContext {
  browser: "chrome" | "firefox";
  os: Runtime.PlatformOs;
  extensionId: string;
}

export const context: TestContext = {
  browser: "chrome",
  os: "mac",
  extensionId: "vitest-webextension-mock",
};

function getURL(path: string) {
  const scheme =
    context.browser === "chrome" ? "chrome-extension" : "moz-extension";
  return `${scheme}://${context.extensionId}/${path}`;
}

const browser = {
  action,
  commands: {
    getAll: vi.fn(),
  },
  runtime: {
    getURL: vi.fn((path) => getURL(path)),
    PlatformOs: "mac",
  },
};

// @ts-expect-error
global.browser = browser;
