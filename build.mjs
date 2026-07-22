import * as esbuild from "esbuild";
import * as fs from "node:fs";

const production = !process.argv.includes("--watch");

const ctx = await esbuild.context({
  entryPoints: ["src/ha-fridge-card.ts"],
  bundle: true,
  format: "iife",
  target: "es2022",
  minify: production,
  outfile: "dist/ha-fridge-card.js",
  logLevel: "info",
});

if (production) {
  await ctx.rebuild();
  await ctx.dispose();
  console.log("Build complete.");
} else {
  await ctx.watch();
  console.log("Watching for changes...");
}
