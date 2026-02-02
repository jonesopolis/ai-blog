import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import { resolve } from 'path';

// Check if certs exist (for local dev)
const certsExist = fs.existsSync('./certs/key.pem') && fs.existsSync('./certs/cert.pem');

export default defineConfig({
  base: '/ai-blog/',
  plugins: [
    react(),
    // Copy index.html to 404.html for GitHub Pages SPA routing
    {
      name: 'copy-404',
      closeBundle() {
        const distPath = resolve(__dirname, 'dist');
        if (fs.existsSync(resolve(distPath, 'index.html'))) {
          fs.copyFileSync(
            resolve(distPath, 'index.html'),
            resolve(distPath, '404.html')
          );
        }
      }
    }
  ],
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  server: {
    allowedHosts: ['code.blog-ai.local'],
    ...(certsExist && {
      https: {
        key: fs.readFileSync('./certs/key.pem'),
        cert: fs.readFileSync('./certs/cert.pem'),
      },
    }),
  },
});
