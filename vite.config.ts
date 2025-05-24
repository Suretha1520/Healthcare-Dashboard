// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Healthcare-Dashboard/', // 👈 Required for GitHub Pages to work
});
