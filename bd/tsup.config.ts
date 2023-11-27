import { defineConfig, Options } from "tsup";

type Env = "development" | "production" | "seed";

export default defineConfig((options) => {
  const envFlag: Env = options.env?.["NODE_ENV"] ?? ("development" as any);

  const commonConfig: Partial<Options> = {
    entry: ["index.ts"],
    splitting: false,
    sourcemap: true,
    clean: true,
    watch: true,
    format: ["esm", "cjs"],
    silent: true,
    outDir: "dist",
    tsconfig: "./tsconfig.json",
    outExtension: (ctx) => {
      return { js: `.${ctx.format}.js` };
    },
  };
  switch (envFlag) {
    case "development": {
      return {
        ...commonConfig,
      };
    }
    case "production": {
      return {
        ...commonConfig,
        watch: false,
        dts: false,
        sourcemap: false,
      };
    }
    case "seed": {
      return {
        ...commonConfig,
        watch: false,
        dts: false,
        silent: false,
        sourcemap: false,
        entry: ["./seed.ts", ...((commonConfig.entry as any[]) ?? [])],
        onSuccess: "node dist/seed.cjs.js",
      };
    }
  }

  return commonConfig;
});
