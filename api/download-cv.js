const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
  // Search for the CV in potential locations
  const searchDirs = [
    path.join(process.cwd(), 'CV'),
    path.join(process.cwd(), '..', 'CV'),
    path.join(process.cwd(), 'Portfolio', 'CV'),
    path.join(process.cwd(), 'Portfolio', 'assets', 'cv'),
    path.join(process.cwd(), 'assets', 'cv')
  ];

  let selectedFile = null;
  let originalName = 'Ahamed_Raafiq_Resume.pdf';

  for (const dir of searchDirs) {
    try {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir).filter(f => {
          if (f.startsWith('.') || f.startsWith('~') || f.endsWith('.json')) return false;
          const ext = path.extname(f).toLowerCase();
          return ['.pdf', '.doc', '.docx'].includes(ext);
        });

        if (files.length > 0) {
          // Sort by last modified time descending (newest file first)
          files.sort((a, b) => {
            const statA = fs.statSync(path.join(dir, a));
            const statB = fs.statSync(path.join(dir, b));
            return statB.mtimeMs - statA.mtimeMs;
          });
          selectedFile = path.join(dir, files[0]);
          originalName = files[0];
          break;
        }
      }
    } catch (err) {
      // Continue checking next candidate directory
    }
  }

  if (!selectedFile) {
    return res.status(404).send('CV file not found. Please upload a PDF to the CV folder.');
  }

  const ext = path.extname(selectedFile).toLowerCase();
  const contentType = ext === '.pdf' ? 'application/pdf' : 'application/octet-stream';

  const stat = fs.statSync(selectedFile);
  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': stat.size,
    'Content-Disposition': 'attachment; filename="Ahamed_Raafiq_Resume.pdf"'
  });

  const readStream = fs.createReadStream(selectedFile);
  readStream.pipe(res);
};
