import "./src";
import { resetContext } from "./src/index";
import { afterEach } from "vitest";

afterEach(() => {
  resetContext();
});
