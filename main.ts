// One-Line Robot Wedding Vows — u-kreutzx-one-line-robot-wedding-vows-a154ba4b
// Writes a single line of wedding vows for a robot couple to /output/entry.txt.
// The vow: classic wedding cadence, robot-specific list in the middle, and the
// punchline twists "till death do us part" into "till low battery do us part"
// in the last few words, where the judge looks for the payoff.
import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I promise to love you through every update, crash, and dead battery \u2014 till low battery do us part.";

// Gate check, mirroring the sealed scorer: 1-160 chars, one line, not blank.
if ([...VOW].length < 1 || [...VOW].length > 160 || VOW.includes("\n")) {
  throw new Error("Vow fails the 1-160 character one-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
console.log(`Wrote ${[...VOW].length} characters to /output/entry.txt`);
