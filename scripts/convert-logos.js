const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const publicDir = path.join(__dirname, '../public');

const logos = [
  { name: 'logo-full', width: 720 },      // 4x for retina
  { name: 'logo-white', width: 720 },
  { name: 'logo-icon-only', width: 180 }, // 4x for retina
  { name: 'logo-large', width: 1440 },    // 4x for retina
  { name: 'logo-small', width: 360 },     // 4x for retina
];

async function convertSVGtoPNG() {
  console.log('🎨 Converting SVG logos to PNG...\n');

  for (const logo of logos) {
    const svgPath = path.join(publicDir, `${logo.name}.svg`);
    const pngPath = path.join(publicDir, `${logo.name}.png`);

    if (!fs.existsSync(svgPath)) {
      console.log(`⚠️  ${logo.name}.svg not found, skipping...`);
      continue;
    }

    try {
      // Using sharp for high-quality conversion
      const sharp = require('sharp');
      
      const svgBuffer = fs.readFileSync(svgPath);
      
      await sharp(svgBuffer)
        .resize(logo.width, null, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png({
          quality: 100,
          compressionLevel: 9
        })
        .toFile(pngPath);

      console.log(`✅ ${logo.name}.png created (${logo.width}px width)`);
    } catch (error) {
      console.error(`❌ Error converting ${logo.name}:`, error.message);
    }
  }

  console.log('\n🎉 Conversion complete!');
}

convertSVGtoPNG().catch(console.error);
