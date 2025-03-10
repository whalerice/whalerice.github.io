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
      meta: [
        { name: "google-adsense-account", content: "ca-pub-4298830590904900" },
      ],
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
  },
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
  content: {},
});
