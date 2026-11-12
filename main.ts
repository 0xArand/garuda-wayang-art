// Garuda Wayang, coolest-art-01 entry (Node 22, standard library only).
// The art is entry.png beside this file: a golden Garuda in wayang shadow
// puppet style, with batik patterns, wings spread on pure black, feathers
// turning to embers and stars. One bold centered silhouette, built to read
// clearly even at about 300 pixels across.
// The program copies it to /output/entry.png, byte for byte, twice with
// the same result, because it does no drawing, no random work, no network.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
// Deterministic by construction: the copy is verified byte for byte.
if (!readFileSync(src).equals(readFileSync(dest))) {
  throw new Error('entry.png copy mismatch');
}
