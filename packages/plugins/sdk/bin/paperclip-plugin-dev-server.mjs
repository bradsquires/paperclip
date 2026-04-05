#!/usr/bin/env node
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const distCli = join(dir, "../dist/dev-cli.js");

if (!existsSync(distCli)) {
  console.error(
    "[@paperclipai/plugin-sdk] dist/dev-cli.js is missing. Run `pnpm --filter @paperclipai/plugin-sdk build` from the workspace root."
  );
  process.exit(1);
}

await import(pathToFileURL(distCli).href);
