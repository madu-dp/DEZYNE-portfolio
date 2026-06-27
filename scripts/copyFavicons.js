const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'src', 'assets', 'Favicon.png');
const sizes = ['16','32','180','192'];
for (const s of sizes) {
  const dest = path.join(__dirname, '..', 'src', 'assets', `Favicon-${s}.png`);
  fs.copyFileSync(src, dest);
  console.log('copied', dest);
}
console.log('done');
