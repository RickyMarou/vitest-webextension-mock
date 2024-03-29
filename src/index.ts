import { vi } from "vitest";
import { action } from "./action";

const browser = {
  action,
  commands: {
    getAll: vi.fn(),
  },
  runtime: {
    getURL: vi.fn((string) => `chrome-extension://${string}`),
    PlatformOs: "mac",
  },
};

// @ts-expect-error
global.browser = browser;
