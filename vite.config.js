import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  build: {
    outDir: "../build",
    emptyOutDir: true,
    minify: "false",
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
      },
    },
  },
});
