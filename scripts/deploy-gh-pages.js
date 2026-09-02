const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const distDir = path.join(__dirname, '..', 'dist', 'al-hayat-dental-clinic', 'browser');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

console.log('1. Verifying 404.html...');
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✓ 404.html generated.');
}

console.log('2. Deploying to gh-pages branch...');
try {
  const remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim();
  console.log(`Using remote: ${remoteUrl}`);

  execSync('git init', { cwd: distDir, stdio: 'inherit' });
  execSync('git checkout -B gh-pages', { cwd: distDir, stdio: 'inherit' });
  execSync('git add -A', { cwd: distDir, stdio: 'inherit' });
  execSync('git commit -m "deploy: update domain to www.drmoazsamir.com and add custom 404 page"', { cwd: distDir, stdio: 'inherit' });
  execSync(`git push -f "${remoteUrl}" gh-pages`, { cwd: distDir, stdio: 'inherit' });

  console.log('✓ Successfully pushed to gh-pages branch!');
} catch (err) {
  console.error('Deployment error:', err);
  process.exit(1);
}
