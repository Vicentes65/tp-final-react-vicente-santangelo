import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tp-final/',
  build: { sourcemap: true }, // para ver el error real en producción
})