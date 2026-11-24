// Entry for "How Many Tabs Do You Have Open?" (make.fun).
// Dan's honest count of open browser tabs: 10.
// The program writes exactly that number, digits only, to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COUNT = "10";

// The gate only accepts 1-5 characters of digits, so refuse anything else
// rather than writing an invalid entry.
if (!/^[0-9]{1,5}$/.test(COUNT)) {
  throw new Error(`invalid tab count: ${JSON.stringify(COUNT)}`);
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), COUNT, "utf8");
