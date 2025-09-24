import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/twentyfifthofseptember/', // 👈 must match your repo name
})


