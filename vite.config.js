import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteAliases } from 'vite-aliases'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  }
})
