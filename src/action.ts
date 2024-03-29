import { vi } from "vitest";

const getDetails = (details: { tabId?: number; windowId?: number }, cb) => {
  if (cb !== undefined) {
    return cb();
  }
  return Promise.resolve();
};

export const action = {
  setTitle: vi.fn(),
  getTitle: vi.fn(
    async (details: { tabId?: number; windowId?: number }): Promise<string> => {
      if (details.windowId && details.tabId) {
        return Promise.reject(
          new Error(
            "Cannot return title when both windowId and tabId are supplied"
          )
        );
      }

      return "mocked title";
    }
  ),
  setIcon: vi.fn(getDetails),
  setPopup: vi.fn(),
  getPopup: vi.fn(getDetails),
  setBadgeText: vi.fn(),
  getBadgeText: vi.fn(getDetails),
  setBadgeBackgroundColor: vi.fn(),
  getBadgeBackgroundColor: vi.fn(getDetails),
  enable: vi.fn(),
  disable: vi.fn(),
  onClicked: {
    addListener: vi.fn(),
  },
};
