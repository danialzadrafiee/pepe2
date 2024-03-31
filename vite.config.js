import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      crypto: 'crypto-browserify',
      buffer: 'buffer',
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'replace-buffer',
          transform(code, id) {
            if (id.includes('node_modules/buffer/index.js')) {
              return code.replace(/global\.Buffer/g, 'Buffer');
            }
          },
        },
      ],
    },
  },
  optimizeDeps: {
    include: ['buffer'],
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          crypto: true,
          buffer: true,
        })
      ]
    }
  }
});