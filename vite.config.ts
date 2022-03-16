import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + '/.env' });

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: parseInt(process.env.PORT),
    https: true,
    cors: true
  },
  build: {
    minify: true
  },
  plugins: [react()]
})
