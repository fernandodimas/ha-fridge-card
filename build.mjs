import * as esbuild from "esbuild";
import * as fs from "node:fs";

const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
const production = !process.argv.includes("--watch");

const ctx = await esbuild.context({
  entryPoints: ["src/ha-fridge-card.ts"],
  bundle: true,
  format: "iife",
  target: "es2022",
  minify: production,
  outfile: "dist/ha-fridge-card.js",
  logLevel: "info",
  banner: { js: `/* ha-fridge-card v${pkg.version} */` },
});

if (production) {
  await ctx.rebuild();
  await ctx.dispose();
  console.log(`Build complete (v${pkg.version}).`);
} else {
  await ctx.watch();
  console.log("Watching for changes...");
}
