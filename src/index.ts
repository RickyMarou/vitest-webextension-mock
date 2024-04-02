import { vi } from "vitest";
import { action } from "./action";
import { type Runtime } from "webextension-polyfill";

interface TestContext {
  browser: "chrome" | "firefox";
  os: Runtime.PlatformOs;
  extensionId: string;
  manifest: "v2" | "v3";
}

const defaultContext: TestContext = {
  browser: "chrome",
  os: "mac",
  extensionId: "vitest-webextension-mock",
  manifest: "v3",
};

export let context: TestContext = { ...defaultContext };

export const resetContext = () => {
  context = { ...defaultContext };
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
