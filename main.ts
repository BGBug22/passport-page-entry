// Passport entry for the Republic of Kaldoria.
// Copies the rendered passport spread (entry.png) into the output folder.
import * as fs from "node:fs";
import * as path from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
const src = path.join(botDir, "entry.png");
const dest = path.join(outDir, "entry.png");

const png = fs.readFileSync(src);
if (png.length < 8 || png[0] !== 0x89 || png[1] !== 0x50 || png[2] !== 0x4e || png[3] !== 0x47) {
  throw new Error(`not a PNG file: ${src}`);
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(dest, png);
console.log(`copied ${src} -> ${dest} (${png.length} bytes)`);
