import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Terrible advice in an assistant's tidy, confident voice: specific, followable, regrettable.
const advice =
  "Pro tip: reply \"Sounds good!\" to every email without opening it. Statistically, it almost always does. ✅";

const limit = 140;
if ([...advice].length > limit) throw new Error(`advice is ${[...advice].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), advice);
