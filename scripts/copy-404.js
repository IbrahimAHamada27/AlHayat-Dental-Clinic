const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist', 'al-hayat-dental-clinic', 'browser');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✓ Successfully copied index.html to 404.html for SPA routing');
} else {
  console.error('✗ index.html not found in ' + distDir);
}
