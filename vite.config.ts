import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,
      includeAssets: ["favicon-64.png", "apple-touch-icon.png"],
      manifest: {
        name: "Razonamiento Matemático y Analítico",
        short_name: "MO Curso",
        description:
          "Curso de Razonamiento Matemático y Analítico — Institución Universitaria Pascual Bravo",
        theme_color: "#0b162c",
        background_color: "#0b162c",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        // Solo rutas de la app (sin extensión) caen al fallback offline.
        // Enlaces a archivos reales (PDF, imágenes, etc.) nunca deben servir index.html.
        // Las guías (public/guias/<semana>/) son páginas reales, no rutas del SPA.
        navigateFallbackDenylist: [/\.[a-zA-Z0-9]+$/, /^\/guias\//],
        // Guías, KaTeX y sus fuentes quedan disponibles sin internet.
        globPatterns: ["**/*.{js,css,html,png,svg,woff2}"],
        globIgnores: ["**/katex/fonts/*.{ttf,woff}", "docs/**"],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
