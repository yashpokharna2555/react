import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // ✅ Correct plugin

export default defineConfig({
  plugins: [react()],  // ✅ Only use the correct plugin
})
