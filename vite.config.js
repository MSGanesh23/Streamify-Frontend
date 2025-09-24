import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// 👇 Hardcode the base path to match your Tomcat context path
export default defineConfig({
  base: '/frontapp1/', // ✅ This must match your WAR context (frontapp1)
  plugins: [react()]
})
