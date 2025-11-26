const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../public/optimized');

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  const baseName = path.parse(filename).name;
  
  try {
    // Convertir a WebP
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(path.join(outputDir, `${baseName}.webp`));
    
    console.log(`✅ Convertido a WebP: ${baseName}.webp`);
    
    // Convertir a AVIF (mejor compresión)
    await sharp(inputPath)
      .avif({ quality: 80, effort: 6 })
      .toFile(path.join(outputDir, `${baseName}.avif`));
    
    console.log(`✅ Convertido a AVIF: ${baseName}.avif`);
    
    // Crear versión optimizada PNG (si es PNG)
    if (path.extname(filename).toLowerCase() === '.png') {
      await sharp(inputPath)
        .png({ quality: 85, compressionLevel: 9 })
        .toFile(path.join(outputDir, `${baseName}-optimized.png`));
      
      console.log(`✅ PNG optimizado: ${baseName}-optimized.png`);
    }
    
    // Generar placeholder blur (base64)
    const blurBuffer = await sharp(inputPath)
      .resize(20, 20, { fit: 'inside' })
      .blur(10)
      .webp({ quality: 20 })
      .toBuffer();
    
    const blurDataURL = `data:image/webp;base64,${blurBuffer.toString('base64')}`;
    
    // Guardar placeholder en archivo JSON
    const placeholderPath = path.join(outputDir, `${baseName}-placeholder.json`);
    fs.writeFileSync(placeholderPath, JSON.stringify({ blurDataURL }, null, 2));
    
    console.log(`✅ Placeholder generado: ${baseName}-placeholder.json`);
    
    // Obtener información de tamaños
    const originalStats = fs.statSync(inputPath);
    const webpStats = fs.statSync(path.join(outputDir, `${baseName}.webp`));
    const avifStats = fs.statSync(path.join(outputDir, `${baseName}.avif`));
    
    console.log(`📊 Tamaños:`);
    console.log(`   Original: ${(originalStats.size / 1024).toFixed(2)} KB`);
    console.log(`   WebP: ${(webpStats.size / 1024).toFixed(2)} KB (${((1 - webpStats.size / originalStats.size) * 100).toFixed(1)}% reducción)`);
    console.log(`   AVIF: ${(avifStats.size / 1024).toFixed(2)} KB (${((1 - avifStats.size / originalStats.size) * 100).toFixed(1)}% reducción)`);
    console.log('');
    
  } catch (error) {
    console.error(`❌ Error procesando ${filename}:`, error.message);
  }
}

async function processAllImages() {
  console.log('🚀 Iniciando optimización de imágenes...\n');
  
  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter(file => 
    /\.(png|jpg|jpeg|gif)$/i.test(file)
  );
  
  if (imageFiles.length === 0) {
    console.log('⚠️  No se encontraron imágenes para optimizar');
    return;
  }
  
  console.log(`📁 Encontradas ${imageFiles.length} imagen(es)\n`);
  
  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    console.log(`🔄 Procesando: ${file}`);
    await optimizeImage(inputPath, file);
  }
  
  console.log('✨ ¡Optimización completada!');
  console.log(`📂 Imágenes optimizadas guardadas en: ${outputDir}`);
}

processAllImages().catch(console.error);

