import { access, cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';

const sourceDir = path.resolve('dist', 'stay-relevant-academy', 'browser');
const targetDir = path.resolve('dist', 'strato-upload');

await access(sourceDir);

await rm(targetDir, { force: true, recursive: true });
await mkdir(targetDir, { recursive: true });

const rootEntries = await readdir(sourceDir, { withFileTypes: true });

for (const entry of rootEntries) {
  if (entry.name === 'experts') {
    continue;
  }

  const from = path.join(sourceDir, entry.name);
  const to = path.join(targetDir, entry.name);

  if (entry.isDirectory() && entry.name === 'courses') {
    await mkdir(to, { recursive: true });

    const courseEntries = await readdir(from, { withFileTypes: true });

    for (const courseEntry of courseEntries) {
      if (courseEntry.name === '_template.json') {
        continue;
      }

      await cp(path.join(from, courseEntry.name), path.join(to, courseEntry.name), {
        force: true,
        recursive: true
      });
    }

    continue;
  }

  await cp(from, to, { force: true, recursive: true });
}

console.log(`Prepared STRATO deploy directory at ${targetDir}.`);
