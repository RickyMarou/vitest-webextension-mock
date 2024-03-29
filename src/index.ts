import { vi } from "vitest";

const browser = {
  commands: {
    getAll: vi.fn(),
  },
};

// @ts-expect-error
global.browser = browser;
