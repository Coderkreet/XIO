import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
   server: {
    port: 6017,
    proxy: {
      '/api': {
        target: 'https://w8vq2gnr-5000.inc1.devtunnels.ms',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  preview: {
    port: 6017,
  },
  
})
