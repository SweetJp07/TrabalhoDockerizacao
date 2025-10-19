import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, //Tive que adicionar o server, pois meu notbook tava abrindo na porta 5174
    host: true
  }

})
