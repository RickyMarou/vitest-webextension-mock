import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    exclude: ["scripts/**"],
    coverage: {
      provider: "v8",
      reporter: ["text-summary", "html", "json", "json-summary"],
    },
  },
});
