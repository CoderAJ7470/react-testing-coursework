import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  test: {
    globals: true, // allows you to write the word "describe"
    environment: 'jsdom',
    setupFiles: './tests/setup'
  },
}));
