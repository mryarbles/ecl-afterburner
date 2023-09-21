/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import fs from 'fs';
import path from 'path';

/**
 * This generates a list of file and folder aliases in the root src directory.
 * This allows you to `import Comp from 'components/MyComponent'` rather than
 * `import Comp from 'src/components/MyComponent'`
 * https://dev.to/andrewezeani/how-to-create-absolute-imports-in-vite-react-app-a-step-by-step-guide-28co
 */
function getSrcAliases() {
  const folders = fs.readdirSync('./src', { withFileTypes: true });
  const fileNames = folders
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
  const filePaths = fileNames.reduce(
    (acc: any, cur) => ({
      ...acc,
      [cur]: `/${cur === 'src' ? cur : 'src/' + cur}`,
    }),
    '',
  );
  return filePaths;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...getSrcAliases(),
    },
  },
  build: {
    sourcemap: true, // make this hidden on prod.
    minify: false, // turn this on on prod.
  },
  server: {
    port: 3000,
    open: '/',
  },
  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
    clearMocks: true,
    maxConcurrency: 10,
    include: ['**/?(*.)test.?(c|m)[jt]s?(x)'],
    setupFiles: [path.join(__dirname, './vite.test.setup.ts')],
    // Use Atomics to synchronize threads.
    // This can improve performance in some cases, but might cause segfault in older Node versions.
    useAtomics: true,
  },
});
