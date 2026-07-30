import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const SRC_DIR = "C:\\Users\\ashwi\\Documents\\drive-download-20260728T180330Z-1-001";
const OUT_DIR = path.resolve("public/services");

const MAP = {
  payroll: "Employee Statutory Benefits Management.webp",
  "labour-law": "Labour Law & Statutory Compliance.webp",
  audits: "Compliance Audit.webp",
  advisory: "Compliance Assessment & Advisory.webp",
  systems: "Centralised Systems & Reporting_.webp",
  representation: "Employee & HR Documentation.webp",
  training: "Compliance Training & Capacity Building.webp",
  factory: "Factory Compliance & Industrial Support.webp",
  "multi-sector": "Compliance Management.webp",
  ehs: "Environmental, Pollution Control & EHS.webp",
  vendor: "Vendor Compliance & Third-Party Governance.webp",
};

const W = 800;
const H = 600;

// Warm cream overlay (matches --tint-2 in the design system) blended in
// softly for cohesion — photos keep their real colour and life, just
// harmonised and lifted, instead of being forced into a dark monochrome.
const WARM_OVERLAY = { r: 250, g: 240, b: 222, alpha: 0.16 };

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const [slug, filename] of Object.entries(MAP)) {
  const src = path.join(SRC_DIR, filename);
  // "-v2" suffix is a deliberate cache-buster (Next.js image optimizer +
  // browser cache both keyed on URL) after the first duotone treatment
  // shipped looking too dark/heavy. Keep this suffix on future re-runs
  // too, or bump it again, so edits are never masked by a stale cache.
  const out = path.join(OUT_DIR, `${slug}-v2.webp`);

  const graded = await sharp(src)
    .resize(W, H, { fit: "cover", position: "attention" })
    .modulate({ brightness: 1.1, saturation: 0.62 }) // brighter, gently muted — not dead
    .linear(1.03, 6) // small lift so nothing reads dark/heavy
    .toBuffer();

  const overlay = await sharp({
    create: {
      width: W,
      height: H,
      channels: 4,
      background: WARM_OVERLAY,
    },
  })
    .png()
    .toBuffer();

  await sharp(graded)
    .composite([{ input: overlay, blend: "soft-light" }])
    .webp({ quality: 84 })
    .toFile(out);

  console.log(`${slug.padEnd(16)} <- ${filename}`);
}

console.log("\nDone.");
