const fs = require('fs');
const path = require('path');

fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('index.html', path.join('dist', 'index.html'));

console.log('Build complete → dist/index.html');
