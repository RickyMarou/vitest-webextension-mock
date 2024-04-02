import { type Events } from "webextension-polyfill";
import { vi } from "vitest";

export const createEventInterface = (): Events.Event<() => any> => {
  let listeners: Array<() => any> = [];

  return {
    addListener: vi.fn(listener => {
      listeners.push(listener);
    }),
    removeListener: vi.fn(listener => {
      listeners = listeners.filter((l) => l !== listener);
    }),
    hasListener: vi.fn(listener => {
      return listeners.includes(listener);
    }),
    hasListeners: vi.fn(() => {
      return listeners.length > 0;
    }),
  };
  }
};
