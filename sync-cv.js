const fs = require('fs');
const path = require('path');

function syncCV() {
  const rootDir = __dirname;
  const cvDir = path.join(rootDir, 'CV');

  if (!fs.existsSync(cvDir)) {
    console.log('[sync-cv] CV directory not found:', cvDir);
    return;
  }

  // Find all document files in CV folder (exclude hidden/temp files)
  const files = fs.readdirSync(cvDir).filter(file => {
    if (file.startsWith('.') || file.startsWith('~') || file.endsWith('.json')) return false;
    const ext = path.extname(file).toLowerCase();
    return ['.pdf', '.doc', '.docx'].includes(ext);
  });

  if (files.length === 0) {
    console.log('[sync-cv] No CV files found in', cvDir);
    return;
  }

  // Sort by last modified time descending (newest file first)
  files.sort((a, b) => {
    const statA = fs.statSync(path.join(cvDir, a));
    const statB = fs.statSync(path.join(cvDir, b));
    return statB.mtimeMs - statA.mtimeMs;
  });

  const latestFile = files[0];
  const sourcePath = path.join(cvDir, latestFile);
  const ext = path.extname(latestFile).toLowerCase();

  // Target destinations
  const destDir1 = path.join(rootDir, 'Portfolio', 'assets', 'cv');
  const destDir2 = path.join(rootDir, 'Portfolio', 'CV');

  [destDir1, destDir2].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  const destFile1 = path.join(destDir1, `Ahamed_Raafiq_Resume${ext}`);
  const destFile2 = path.join(destDir2, `latest${ext}`);
  const destFileOriginal = path.join(destDir1, latestFile);

  fs.copyFileSync(sourcePath, destFile1);
  fs.copyFileSync(sourcePath, destFile2);
  fs.copyFileSync(sourcePath, destFileOriginal);

  // Write metadata manifest
  const manifest = {
    originalName: latestFile,
    extension: ext,
    downloadName: `Ahamed_Raafiq_Resume${ext}`,
    url: `assets/cv/Ahamed_Raafiq_Resume${ext}`,
    updatedAt: new Date().toISOString()
  };

  fs.writeFileSync(path.join(destDir1, 'cv-manifest.json'), JSON.stringify(manifest, null, 2));

  console.log(`[sync-cv] Successfully synced: "${latestFile}" -> "${destFile1}"`);
}

if (require.main === module) {
  syncCV();
}

module.exports = syncCV;
