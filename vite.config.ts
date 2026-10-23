
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/youtube-feed': {
        target: 'https://www.youtube.com',
        changeOrigin: true,
        rewrite: () => '/feeds/videos.xml?channel_id=UCWIXEldauH5QwW5Qpx7R7bg',
      },
    },
  },
})
