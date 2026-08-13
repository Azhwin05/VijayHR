import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const SRC_DIR =
  "C:/Users/ashwi/AppData/Local/Temp/claude/E--Vijay-hr-latest/6f1e3708-0177-4684-b6df-0b0e21caab52/scratchpad/logos_all";
const OUT_DIR = path.resolve("public/clients");

fs.mkdirSync(OUT_DIR, { recursive: true });

const files = fs.readdirSync(SRC_DIR).sort();
const manifest = [];

for (const file of files) {
  const src = path.join(SRC_DIR, file);
  const slug = file.replace(/\.(png|jpe?g)$/i, "");
  const out = path.join(OUT_DIR, `${slug}.png`);

  try {
    // trim exactly once, into a buffer, so the crop box is computed from
    // one single pipeline pass -- chaining more ops onto the same lazy
    // sharp() pipeline after an separate metadata() read caused the trim
    // to re-run and shave the edges inconsistently.
    const { data: trimmedBuf, info } = await sharp(src)
      .ensureAlpha()
      .trim({ threshold: 12 })
      .toBuffer({ resolveWithObject: true });

    const TARGET_H = 120;
    const scale = TARGET_H / (info.height || TARGET_H);
    const w = Math.round((info.width || TARGET_H) * scale);

    await sharp(trimmedBuf)
      .resize({ height: TARGET_H, width: w })
      .extend({
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(out);

    manifest.push(slug);
  } catch (e) {
    console.log("FAILED", file, e.message);
  }
}

fs.writeFileSync(
  path.resolve("lib/data/client-logos.json"),
  JSON.stringify(manifest, null, 2)
);
console.log(`Processed ${manifest.length} logos`);
