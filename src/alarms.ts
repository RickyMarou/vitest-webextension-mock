import { vi } from "vitest";
import { alarms as browserAlarms, type Alarms } from "webextension-polyfill";
import { createEventInterface } from "./event";

const activeAlarms: Record<string, Alarms.Alarm> = {};

const create: typeof browserAlarms.create = vi.fn(
  (name: string | undefined, alarmInfo: Alarms.CreateAlarmInfoType) => {
    activeAlarms[name] = {
      name,
      scheduledTime: Date.now() + (alarmInfo.delayInMinutes || 0) * 60 * 1000,
      periodInMinutes: alarmInfo.periodInMinutes,
    };
  }
);

export const alarms: typeof browserAlarms = {
  clear: vi.fn(),
  clearAll: vi.fn(),
  create: vi.fn(),
  get: vi.fn(),
  getAll: vi.fn(),
  onAlarm: createEventInterface(),
};
