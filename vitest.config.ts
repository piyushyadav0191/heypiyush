import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    exclude: ["node_modules"],
    coverage: {
      reporter: ["lcov", "html"],
    },
  },
  resolve: {
    alias: {
      "@": "./src",
      "contentlayer/generated": "./src/tests/mocks/contentlayer.ts",
    },
  },
});
