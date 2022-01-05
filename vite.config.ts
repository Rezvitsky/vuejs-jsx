import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx
    Vue()
  ]
})
