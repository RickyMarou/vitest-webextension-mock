import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    exclude: [...configDefaults.exclude, "**/scripts/**"],
    coverage: {
      exclude: [...configDefaults.exclude, "**/scripts/**"],
      provider: "v8",
      reporter: ["text-summary", "html", "json", "json-summary"],
    },
  },
});
