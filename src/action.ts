import { vi } from "vitest";
import { context } from "./index";
import { browserAction } from "webextension-polyfill";
import { createEventInterface } from "./event";

const checkWindowIdAndTabId = (details: {
  tabId?: number;
  windowId?: number;
}) => {
  if (details.windowId && details.tabId) {
    throw new Error(
      "Cannot set title when both windowId and tabId are supplied"
    );
  }
};

const checkManifestV3 = (funcName?: string) => {
  if (context.manifest !== "v3") {
    throw new Error(
      `${funcName ? funcName : "This API"} is only available in manifest v3`
    );
  }
};

const setTitle: typeof browserAction.setTitle = vi.fn(async (details) => {
  checkWindowIdAndTabId(details);
  return Promise.resolve();
});

const getTitle: typeof browserAction.getTitle = vi.fn(async (details) => {
  checkWindowIdAndTabId(details);
  return Promise.resolve("mocked title");
});

const setIcon: typeof browserAction.setIcon = vi.fn(async (details) => {
  checkWindowIdAndTabId(details);
  return Promise.resolve();
});

const setPopup: typeof browserAction.setPopup = vi.fn(async (details) => {
  checkManifestV3("setPopup");
  checkWindowIdAndTabId(details);
  return Promise.resolve();
});

const getPopup: typeof browserAction.getPopup = vi.fn(async (details) => {
  checkWindowIdAndTabId(details);
  const scheme =
    context.browser === "chrome" ? "chrome-extension" : "moz-extension";
  return Promise.resolve(`${scheme}://${context.extensionId}/popup.html`);
});

const setBadgeText: typeof browserAction.setBadgeText = vi.fn(
  async (details) => {
    checkWindowIdAndTabId(details);
    return Promise.resolve();
  }
);

const getBadgeText: typeof browserAction.getBadgeText = vi.fn(
  async (details) => {
    checkManifestV3("getBadgeText");
    checkWindowIdAndTabId(details);
    return Promise.resolve("mocked badge text");
  }
);

const setBadgeBackgroundColor: typeof browserAction.setBadgeBackgroundColor =
  vi.fn(async (details) => {
    checkManifestV3("setBadgeBackgroundColor");
    if (!details.color) {
      throw new Error("color is required");
    }

    checkWindowIdAndTabId(details);
    return Promise.resolve();
  });

const getBadgeBackgroundColor: typeof browserAction.getBadgeBackgroundColor =
  vi.fn(async (details) => {
    checkWindowIdAndTabId(details);
    return Promise.resolve([0, 0, 0, 0]);
  });

const enable: typeof browserAction.enable = vi.fn();
const disable: typeof browserAction.disable = vi.fn();

const getBadgeTextColor: typeof browserAction.getBadgeTextColor = vi.fn(
  async (details) => {
    checkManifestV3();
    checkWindowIdAndTabId(details);
    return Promise.resolve([0, 0, 0, 0]);
  }
);

const getUserSettings: typeof browserAction.getUserSettings = vi.fn(
  async () => {
    checkManifestV3();
    return Promise.resolve({ isOnToolbar: false });
  }
);

export const action: typeof browserAction = {
  disable,
  enable,
  getBadgeBackgroundColor,
  getBadgeText,
  getBadgeTextColor,
  getPopup,
  getTitle,
  getUserSettings,
  isEnabled: vi.fn(),
  onClicked: createEventInterface(),
  openPopup: vi.fn(),
  setBadgeBackgroundColor,
  setBadgeText,
  setBadgeTextColor: vi.fn(),
  setIcon,
  setIconAnimation: vi.fn(),
  setPopup,
  setTitle,
};
