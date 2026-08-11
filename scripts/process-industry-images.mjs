import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const SCRATCH =
  "C:/Users/ashwi/AppData/Local/Temp/claude/E--Vijay-hr-latest/6f1e3708-0177-4684-b6df-0b0e21caab52/scratchpad";
const OUT_DIR = path.resolve("public/industries");

// slug -> downloaded filename in scratchpad
const MAP = {
  manufacturing: "check-1.png", // "Industries_We_Serve" asset — actually the factory/manufacturing photo
  it: "check-2.png", // "IT_ITeS_Technology"
  construction: "construction.png",
  logistics: "logistics.png",
  retail: "retail.png",
  bfsi: "bfsi.png",
  hospitality: "hospitality.png",
  mining: "mining.png",
};

const W = 640;
const H = 800; // 4:5 portrait, matches the reference sector-card crop

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const [slug, filename] of Object.entries(MAP)) {
  const src = path.join(SCRATCH, filename);
  const out = path.join(OUT_DIR, `${slug}.webp`);
  await sharp(src)
    .resize(W, H, { fit: "cover", position: "attention" })
    .webp({ quality: 86 })
    .toFile(out);
  console.log(`${slug.padEnd(14)} <- ${filename}`);
}

// POSH — replace the stock photo with the official provided asset
await sharp(path.join(SCRATCH, "check-3.png"))
  .resize(800, 600, { fit: "cover", position: "attention" })
  .modulate({ brightness: 1.05, saturation: 0.7 })
  .webp({ quality: 84 })
  .toFile(path.resolve("public/services/posh-v2.webp"));
console.log("posh (service)  <- check-3.png (official asset)");

// Vijay Kumar E — leadership headshot, square-ish crop
await sharp(path.join(SCRATCH, "vijay.png"))
  .resize(480, 560, { fit: "cover", position: "top" })
  .webp({ quality: 90 })
  .toFile(path.resolve("public/brand/vijay-kumar-e.webp"));
console.log("vijay-kumar-e   <- vijay.png");

console.log("\nDone.");
