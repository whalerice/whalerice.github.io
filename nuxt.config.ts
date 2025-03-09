// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2025-03-09",
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  app: {
    baseURL: "/", // 사용자 사이트는 루트 경로 사용
    buildAssetsDir: "assets",
  },
  nitro: {
    prerender: {
      routes: ["/"],
    },
    preset: "github-pages",
  },
});
