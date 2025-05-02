import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths'; // <--- Import this

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()], // <--- Include it in the plugins array
  base: process.env.VITE_URL || '/Weather-app'
});