// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: true,

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxt/image",
    "dayjs-nuxt",
  ],

  css: ["@/assets/css/main.css", "@/assets/scss/global.scss"],

  future: {
    compatibilityVersion: 4,
  },

  content: {
    build: {
      markdown: {
        toc: {
          depth: 2,
          searchDepth: 2,
        },
        highlight: {
          theme: "github-light",
          langs: ["json", "js", "ts", "html", "css", "vue", "bash", "yaml"],
        },
      },
    },
  },

  devServer: {
    port: 4000,
  },
  compatibilityDate: "2024-11-27",

  // GitHub Pages를 위한 설정
  app: {
    baseURL: "/", // 저장소 이름으로 설정
    buildAssetsDir: "assets", // _nuxt 대신 assets로 설정
    head: {
      script: [
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4298830590904900",
          async: true,
          crossorigin: "anonymous",
        },
      ],
      meta: [
        {
          name: "google-adsense-account",
          content: "ca-pub-4298830590904900",
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/scss/variables.scss" as *; @use "@/assets/scss/mixins.scss" as *;',
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./"),
        "~": resolve(__dirname, "./"),
      },
    },
  },
  nitro: {
    routeRules: {
      "/**": { cors: true },
    },
  },
});
