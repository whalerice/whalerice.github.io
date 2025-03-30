---
title: "Nuxt3 프로젝트 셋팅"
date: "2025-03-16"
description: "Nuxt 프로젝트 초기 세팅에 대한 기록입니다."
image: "https://blog.kakaocdn.net/dn/DDDqK/btrRhV01c3Q/3ydgjy9yeDj8Jx5W5YzGk0/img.png"
tags: ["Nuxt3"]
---

![A Cool Image](https://blog.kakaocdn.net/dn/DDDqK/btrRhV01c3Q/3ydgjy9yeDj8Jx5W5YzGk0/img.png)

<br/><br/>

## Nuxt3 설치

```bash
pnpm create nuxt <project-name>
```

<br/>

## Eslint 설치

```bash
npx nuxi module add eslint
```

<br/>

## Typescript 설치

```bash
pnpm add -D vue-tsc typescript
```

<br/>

## SCSS 설치

```bash
pnpm add -D sass
```

<br/>

`nuxt.config.ts`

```ts
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  typescript: {
    typeCheck: true,
    strict: true,
  },

  modules: ["@nuxt/eslint"],
});
```

<br/>

### 폴더구조

```
-| assets/

-| components/
---| AppHeader.vue
---| AppFooter.vue

-| composables/
---| useFoo.ts

-| layouts/
---| default.vue
---| custom.vue

-| middleware/
---| analytics.global.ts
---| setup.global.ts
---| auth.ts

-| modules/

-| pages/
---| index.vue
---| users-[group]/
-----| [id].vue

-| plugins/
---| foo.ts      // scanned
---| bar/
-----| baz.ts    // not scanned
-----| foz.vue   // not scanned
-----| index.ts  // currently scanned but deprecated

-| shared/
---| capitalize.ts        # Not auto-imported
---| formatters
-----| lower.ts           # Not auto-imported

---| utils/
-----| lower.ts           # Auto-imported
-----| formatters
-------| upper.ts         # Not auto-imported

---| types/
-----| bar.d.ts           # Auto-imported
```

<br/><br/>

## Pinia - Store

```bash
npx nuxi@latest module add pinia
pnpm add -D pinia-plugin-persistedstate
pnpm add -D @pinia-plugin-persistedstate/nuxt
```

<br/>

`nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  ...
  pinia: {
    storesDirs: ["stores/**"],
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "cookies",
  },
});
```
