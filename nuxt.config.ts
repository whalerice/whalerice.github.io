// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2025-03-09",
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  app: {
    baseURL: "/whalerice.github.io/", // 반드시 앞뒤 슬래시(/)를 포함해야 합니다
    buildAssetsDir: "assets",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
    preset: "github-pages",
    output: {
      publicDir: ".output/public",
    },
  },
  ssr: false,
  experimental: {
    payloadExtraction: false,
  },
  content: {},
});
