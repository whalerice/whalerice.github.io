---
title: TailwindCSS 실전 팁 모음
description: TailwindCSS를 더 효율적으로 사용하기 위한 실용적인 팁들을 소개합니다
date: 2024-03-12
tags: ["CSS", "TailwindCSS", "프론트엔드", "디자인"]
---

# TailwindCSS 실전 팁 모음

TailwindCSS를 사용하면서 알게 된 유용한 팁들을 공유합니다.

## 1. 자주 사용하는 클래스 조합 추출하기

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
    },
  },
};
```

## 2. 반응형 디자인 팁

모바일 퍼스트 접근법을 사용하여 반응형 디자인을 구현하는 방법:

```html
<div class="text-sm md:text-base lg:text-lg">반응형 텍스트</div>
```

## 3. 다크 모드 지원

```html
<div class="bg-white dark:bg-gray-800">다크 모드 지원</div>
```

## 4. 커스텀 유틸리티 생성

자주 사용하는 스타일 조합을 @apply를 사용하여 추출:

```css
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600;
}
```

## 결론

TailwindCSS는 유연하고 강력한 도구이며, 이러한 팁들을 활용하면 더 효율적으로 사용할 수 있습니다.
