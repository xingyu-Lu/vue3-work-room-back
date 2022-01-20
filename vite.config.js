import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const baseUrl = {
  development: './',
  beta: './',
  release: './',
  production: './',
}

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  plugins: [vue()],
  resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, 'src')
      }
    },
  base: baseUrl[mode],
  server: {
	  proxy: {
		'/apis': {
		  target: 'http://127.0.0.1/',
		  changeOrigin: true,
		  rewrite: path => path.replace(/^\/apis/, '')
		}
	  },
	  // cors: true,
	  host: '0.0.0.0'
	}
})
