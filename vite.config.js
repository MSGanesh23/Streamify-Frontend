import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


const basePath = process.env.VITE_BASE || '/'

export default defineConfig({
  base: basePath,
  plugins: [react()]
})
