import { defineConfig, Options } from "tsup";
import { omit } from "radash";
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
      ...omit(commonConfig, ["onSuccess"]),
      watch: false,
      format: ["esm", "cjs"],
      dts: false,
      sourcemap: false,
      tsconfig: "./tsconfig.json",
    };
  }
  return commonConfig;
});
