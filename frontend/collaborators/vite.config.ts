import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({mode}: {mode: string})=>{
  let isProduction;
  mode === 'development'
  isProduction = mode
   return defineConfig({
    plugins: [react()],
    base: isProduction ? 'collaborators/frontend/collaborators/dist' : '/',
    build: {
      outDir: 'dist',
      assetsDir: '/scripts',
rollupOptions: {
  output: {
    entryFileNames: `[name].js`,
    chunkFileNames: `[name].js`,
    assetFileNames: `[name].[ext]`
  }
}
    } 
   })
}
