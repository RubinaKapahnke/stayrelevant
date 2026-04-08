import { copyFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const browserDir = path.resolve('dist', 'stay-relevant-academy', 'browser');

const legacyChunkAliases = ['chunk-2H6OG7B2.js', 'chunk-USCSZ336.js'];
const legacyMainAliases = ['main-7BUQFTBO.js', 'main-X4ZYTX6G.js', 'main-JP765HNO.js'];
const legacyStyleAliases = ['styles-446ZCDJ5.css', 'styles-N3TNYDE7.css', 'styles-NZD34LKT.css'];

const files = await readdir(browserDir);

const currentChunks = (
  await Promise.all(
    files
      .filter((file) => /^chunk-[A-Z0-9]+\.js$/i.test(file))
      .map(async (file) => ({
        file,
        size: (await stat(path.join(browserDir, file))).size
      }))
  )
).sort((left, right) => right.size - left.size);
const currentMain = files.find((file) => /^main-[A-Z0-9]+\.js$/i.test(file));
const currentStyles = files.find((file) => /^styles-[A-Z0-9]+\.css$/i.test(file));

if (!currentMain || !currentStyles || currentChunks.length === 0) {
  throw new Error('Current build assets not found in dist/stay-relevant-academy/browser.');
}

for (const [index, alias] of legacyChunkAliases.entries()) {
  const currentChunk = currentChunks[index]?.file;

  if (currentChunk && alias !== currentChunk) {
    await copyFile(path.join(browserDir, currentChunk), path.join(browserDir, alias));
  }
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

console.log(
  `Created cache-compat aliases for ${currentMain}, ${currentStyles} and ${currentChunks.map((chunk) => chunk.file).join(', ')}.`
);
