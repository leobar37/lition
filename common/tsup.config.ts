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
    format: ["esm", "cjs"],
    silent: true,
    outDir: "dist",
    outExtension: (ctx) => {
      return { js: `.${ctx.format}.js` };
    },
  };

  if (isProduction) {
    return {
      ...commonConfig,
      watch: false,
      dts: false,
      sourcemap: false,
    };
  }
  return commonConfig;
});
