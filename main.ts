// The Robot Vacuum's Best Excuse — one-line excuse a robot vacuum gives
// for missing a spot. Writes a single line (<=140 characters) to
// /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My cliff sensor voted 3-2 that the corner was a staircase. I respect democracy, so I left the dust there and went home to charge.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
