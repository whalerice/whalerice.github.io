// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2025-03-09",
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  app: {
    baseURL: "/whalerice/",
    buildAssetsDir: "assets",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  nitro: {
    preset: "github-pages",
  },
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
  content: {},
});
