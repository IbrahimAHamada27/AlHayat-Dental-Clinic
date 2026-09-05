const fs = require('fs');
const path = require('path');

const baseDist = path.join(__dirname, '..', 'dist', 'al-hayat-dental-clinic');
const browserDist = path.join(baseDist, 'browser');

let targetDir = null;
if (fs.existsSync(path.join(baseDist, 'index.html'))) {
  targetDir = baseDist;
} else if (fs.existsSync(path.join(browserDist, 'index.html'))) {
  targetDir = browserDist;
}

if (targetDir) {
  const indexPath = path.join(targetDir, 'index.html');
  const notFoundPath = path.join(targetDir, '404.html');
  fs.copyFileSync(indexPath, notFoundPath);
  console.log(`✓ Successfully copied index.html to 404.html in ${targetDir}`);
} else {
  console.log('Notice: index.html not yet found to generate 404.html');
}
