// https://nuxt.com/docs/api/configuration/nuxt-config
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
          theme: "dracula",
          langs: [
            "json",
            "javascript",
            "typescript",
            "js",
            "ts",
            "html",
            "css",
            "vue",
            "bash",
            "yaml",
          ],
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
    baseURL: process.env.NODE_ENV === "production" ? "/" : "/whalerice/", // 저장소 이름으로 설정
    buildAssetsDir: "assets", // _nuxt 대신 assets로 설정
    head: {
      script: [
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4298830590904900",
          async: true,
          crossorigin: "anonymous",
        },
        // Google Analytics 스크립트 추가
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-TZ39L8X5FT", // 여기에 자신의 측정 ID를 넣으세요
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TZ39L8X5FT');
          `,
          type: "text/javascript",
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
  },
});
