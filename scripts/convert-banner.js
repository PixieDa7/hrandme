const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '../public');
const svgPath = path.join(publicDir, 'linkedin-banner.svg');
const pngPath = path.join(publicDir, 'linkedin-banner.png');

async function convertBanner() {
  console.log('🎨 Converting LinkedIn banner to PNG...\n');

  try {
    const svgBuffer = fs.readFileSync(svgPath);
    
    await sharp(svgBuffer)
      .resize(1584, 396, {
        fit: 'contain',
        background: { r: 15, g: 23, b: 42, alpha: 1 }
      })
      .png({
        quality: 100,
        compressionLevel: 9
      })
      .toFile(pngPath);

    console.log('✅ linkedin-banner.png created (1584x396px)');
    console.log('\n🎉 LinkedIn banner ready to use!');
    console.log('\n📍 Location: /public/linkedin-banner.png');
  } catch (error) {
    console.error('❌ Error converting banner:', error.message);
  }
}

convertBanner().catch(console.error);
