const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const EXCLUDE = new Set(['.git', '.github', '.idea', 'dist', 'node_modules', 'build.js', 'package.json', '.gitignore']);

fs.mkdirSync('dist', { recursive: true });

for (const entry of fs.readdirSync('.', { withFileTypes: true })) {
  if (EXCLUDE.has(entry.name)) continue;
  const dest = path.join('dist', entry.name);
  if (entry.isDirectory()) {
    copyDir(entry.name, dest);
  } else {
    fs.copyFileSync(entry.name, dest);
  }
}

console.log('Build complete → dist/');
