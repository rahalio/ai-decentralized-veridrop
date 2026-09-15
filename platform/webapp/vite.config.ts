import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@/services",
        replacement: path.resolve(__dirname, "./src/services"),
      },
      {
        find: "@/features",
        replacement: path.resolve(__dirname, "./src/features"),
      },
      {
        find: "@/",
        replacement: `${path.resolve(__dirname, "./src")}/`,
      },
    ],
  },
  server: {
    port: 5173,
    proxy: {
      "/v0": "http://127.0.0.1:4000",
      "/health": "http://127.0.0.1:4000",
    },
  },
});
