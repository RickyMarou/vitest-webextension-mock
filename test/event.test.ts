import { describe, expect, test } from "vitest";
import { createEventInterface } from "../src/event";

describe("event", () => {
  test("addListener", () => {
    const mockEvent = createEventInterface();

    const listener = () => {};
    mockEvent.addListener(listener);
    expect(mockEvent.hasListener(listener)).toBe(true);
  });

  test("removeListener", () => {
    const mockEvent = createEventInterface();

    const listener = () => {};
    mockEvent.addListener(listener);
    mockEvent.removeListener(listener);
    expect(mockEvent.hasListener(listener)).toBe(false);
  });

  test("hasListeners", () => {
    const mockEvent = createEventInterface();

    expect(mockEvent.hasListeners()).toBe(false);
    mockEvent.addListener(() => {});
    expect(mockEvent.hasListeners()).toBe(true);
  });
});
