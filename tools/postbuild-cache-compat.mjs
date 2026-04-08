import { copyFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const browserDir = path.resolve('dist', 'stay-relevant-academy', 'browser');

const legacyMainAliases = ['main-7BUQFTBO.js', 'main-X4ZYTX6G.js', 'main-JP765HNO.js'];
const legacyStyleAliases = ['styles-446ZCDJ5.css', 'styles-N3TNYDE7.css', 'styles-NZD34LKT.css'];

const files = await readdir(browserDir);

const currentMain = files.find((file) => /^main-[A-Z0-9]+\.js$/i.test(file));
const currentStyles = files.find((file) => /^styles-[A-Z0-9]+\.css$/i.test(file));

if (!currentMain || !currentStyles) {
  throw new Error('Current build assets not found in dist/stay-relevant-academy/browser.');
}

for (const alias of legacyMainAliases) {
  if (alias !== currentMain) {
    await copyFile(path.join(browserDir, currentMain), path.join(browserDir, alias));
  }
}

for (const alias of legacyStyleAliases) {
  if (alias !== currentStyles) {
    await copyFile(path.join(browserDir, currentStyles), path.join(browserDir, alias));
  }
}

console.log(`Created cache-compat aliases for ${currentMain} and ${currentStyles}.`);
