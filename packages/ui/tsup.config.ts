import { defineConfig } from "tsup";
import Vue from "unplugin-vue/esbuild";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  platform: "browser",
  target: "es2020",
  clean: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  external: ["vue"],
  esbuildPlugins: [Vue({ isProduction: true })],
});
