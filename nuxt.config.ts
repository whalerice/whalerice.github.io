// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2025-03-09",
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  app: {
    baseURL: "/whalerice.github.io/", // GitHub Pages의 저장소 이름으로 수정
    buildAssetsDir: "assets",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      script: [
        {
          type: "module",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
    preset: "github-pages",
    output: {
      publicDir: "dist",
    },
  },
  ssr: false,
  experimental: {
    payloadExtraction: false,
  },
  content: {},
});
