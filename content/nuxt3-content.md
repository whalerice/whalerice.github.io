---
title: Nuxt Content로 마크다운 블로그 만들기
description: Nuxt Content 모듈을 사용하여 마크다운 기반의 블로그를 구축하는 방법
date: 2024-03-11
tags: ["Nuxt", "마크다운", "블로그", "튜토리얼"]
---

# Nuxt Content로 마크다운 블로그 만들기

Nuxt Content는 Nuxt.js 애플리케이션에서 콘텐츠를 쉽게 관리할 수 있게 해주는 모듈입니다.

## 설치 방법

```bash
npm install @nuxt/content
```

## nuxt.config.ts 설정

```ts
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
});
```

## 마크다운 파일 작성하기

마크다운 파일은 `content` 디렉토리에 저장됩니다. 각 파일은 다음과 같은 형식을 가집니다:

```md
---
title: 제목
description: 설명
---

콘텐츠 내용...
```

## 콘텐츠 표시하기

```vue
<ContentDoc />
```

## 장점

1. 마크다운 지원
2. 프론트매터 지원
3. 강력한 쿼리 시스템
4. 자동 TOC 생성

## 결론

Nuxt Content를 사용하면 개발자 친화적인 블로그를 쉽게 만들 수 있습니다.
