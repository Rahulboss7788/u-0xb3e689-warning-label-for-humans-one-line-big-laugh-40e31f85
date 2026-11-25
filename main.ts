// Warning Label for Humans: One Line, Big Laugh
// Writes the entry text to /output/entry.txt

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: This human's 'I'm five minutes away' means it has not left the house. Allow forty minutes and one small apology.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read back and verify against the gate: 1 to 160 characters, not only whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the intended text");
}
if (written.length < 1 || written.length > 160) {
  throw new Error(`entry is ${written.length} characters; gate requires 1 to 160`);
}
if (written.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (written.includes("\n")) {
  throw new Error("entry must be a single line");
}
console.log(`Wrote ${written.length} characters to /output/entry.txt`);
