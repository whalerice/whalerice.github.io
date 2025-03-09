// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2025-03-09",
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  app: {
    baseURL: "/",
    buildAssetsDir: "assets",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      script: [
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4298830590904900",
          async: true,
          crossorigin: "anonymous",
        },
      ],
    },
  },
  nitro: {
    preset: "github-pages",
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
    static: {
      publicAssets: [
        {
          dir: "public",
          maxAge: 60 * 60 * 24 * 365, // 1년
        },
      ],
    },
  },
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
  content: {},
});
