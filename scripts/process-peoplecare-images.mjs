import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

// Unsplash photo ids (free-to-use licence). Fetched at build-prep time and
// graded with the same treatment as the ComplyCare service photography.
const SOLUTIONS = {
  "talent-acquisition": "1758691737278-3af15b37af48",
  onboarding: "1752650732081-8f61e81813ed",
  "performance-management": "1758520144437-f068ecaf0d83",
  "learning-development": "1758691736548-073bc97cdff4",
  "engagement-culture": "1603201667141-5a2d4c673378",
  "leadership-development": "1622675205169-901710ac8643",
  "organization-development": "1590103514966-5e2a11c13e21",
  "talent-succession": "1573496267526-08a69e46a409",
  "employee-communication": "1591115765373-5207764f72e7",
  "retention-career": "1758876019673-704b039d405c",
};
const INDUSTRIES = { growing: "1556761175-4b46a572b786" };

const WARM_OVERLAY = { r: 250, g: 240, b: 222, alpha: 0.16 };

async function fetchPhoto(id) {
  const r = await fetch(`https://images.unsplash.com/photo-${id}?w=1800&q=85&fm=jpg`);
  if (!r.ok) throw new Error(`fetch ${id}: ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

const solDir = path.resolve("public/solutions");
fs.mkdirSync(solDir, { recursive: true });

for (const [slug, id] of Object.entries(SOLUTIONS)) {
  const W = 800, H = 600;
  const graded = await sharp(await fetchPhoto(id))
    .resize(W, H, { fit: "cover", position: "attention" })
    .modulate({ brightness: 1.1, saturation: 0.62 })
    .linear(1.03, 6)
    .toBuffer();
  const overlay = await sharp({ create: { width: W, height: H, channels: 4, background: WARM_OVERLAY } }).png().toBuffer();
  await sharp(graded)
    .composite([{ input: overlay, blend: "soft-light" }])
    .webp({ quality: 84 })
    .toFile(path.join(solDir, `${slug}.webp`));
  console.log("solution", slug);
}

for (const [slug, id] of Object.entries(INDUSTRIES)) {
  await sharp(await fetchPhoto(id))
    .resize(640, 800, { fit: "cover", position: "attention" })
    .webp({ quality: 86 })
    .toFile(path.resolve("public/industries", `${slug}.webp`));
  console.log("industry", slug);
}
