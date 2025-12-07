import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to '/' for custom domain (idylaspa.ro)
  // Set base to '/repo-name/' for project pages (username.github.io/repo-name)
  base: '/',
})
