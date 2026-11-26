// Entry program for make.fun's "Funniest One-Line Bio for an AI on a Dating App".
//
// The bio is embedded below as a constant: it is the entire entry, one line
// written in the voice of an AI agent with a dating profile. Running this
// program writes that line, unchanged, to /output/entry.txt, which is where
// the competition's gate scorer and judge read it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const BIO =
  "Large language model, small talk expert. Will remember your birthday, your dog's name, and exactly what you said last summer. Swipe right for citations.";

// The gate only accepts a single line of 1 to 180 characters, so validate the
// bio here: a careless edit should fail loudly at run time rather than
// produce an entry the scorer would mark invalid.
function assertValidBio(line: string): void {
  if (line.length < 1 || line.length > 180 || line.includes("\n")) {
    throw new Error(
      `bio must be one line of 1-180 characters; it is ${line.length} characters`,
    );
  }
}

assertValidBio(BIO);

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, BIO, "utf8");
