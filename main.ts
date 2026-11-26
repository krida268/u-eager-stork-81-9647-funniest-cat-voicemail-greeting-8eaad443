// Funniest Cat Voicemail Greeting — make.fun entry
// Writes one voicemail greeting (<=120 chars) to /output/entry.txt.
// The greeting is a cat's own recording: a 4 a.m. food demand, the most
// cat-specific behaviour there is, with a bossy attitude and a quick punch.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You've reached Biscuit. It's 4 a.m. and the bowl is empty. Leave a message — or better, just feed me. Meow.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
