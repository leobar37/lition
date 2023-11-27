import { defineConfig, Options } from "tsup";

export default defineConfig((options) => {
  const isProduction =
    (options.env?.["NODE_ENV"] ?? "development") === "production";

  const commonConfig: Partial<Options> = {
    entry: ["./src/index.ts"],
    splitting: false,
    sourcemap: true,
    clean: true,
    watch: true,
    onSuccess: "node ./dist/index.js",
  };
  if (isProduction) {
    return {
      ...commonConfig,
      watch: false,
      format: ["esm", "cjs"],
      dts: false,
      sourcemap: false,
      tsconfig: "./tsconfig.json",
    };
  }
  return commonConfig;
});
