import { vi } from "vitest";

const browser = {
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
