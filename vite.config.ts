
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // Ensure the base path is correct
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'es', // Ensure ES module format
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Use terser for minification
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false
      }
    },
    // Disable sourcemaps in production to avoid the @tanstack/react-query errors
    sourcemap: mode === 'development',
    // Ensure correct asset paths
    assetsDir: 'assets',
  },
}));
