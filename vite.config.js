import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  build: {
    // Target browsers that support modern JavaScript features
    target: "esnext",

    // Choose minifier ('esbuild' is default, 'terser' is slightly better but slower)
    minify: "terser",

    // Pass options to Terser if you use it
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs
        drop_debugger: true, // Remove debugger statements
      },
    },

    // Warning threshold for chunk sizes (default is 500kb)
    chunkSizeWarningLimit: 1000,
  },
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 20 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [
          { name: "removeViewBox" },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
    }),
    viteCompression({
      algorithm: "gzip", // or 'brotliCompress'
      ext: ".gz",
      threshold: 10240, // Only compress files larger than 10kb
    }),
  ],
});
