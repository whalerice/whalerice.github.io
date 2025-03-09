---
title: Vue 3 Composition API 완벽 가이드
description: Vue 3의 핵심 기능인 Composition API의 사용법과 장점을 알아봅니다
date: 2024-03-10
tags: ["Vue", "JavaScript", "프론트엔드", "Composition API"]
---

# Vue 3 Composition API 완벽 가이드

Vue 3의 가장 큰 특징 중 하나인 Composition API에 대해 자세히 알아보겠습니다.

## Composition API란?

Composition API는 Vue 3에서 도입된 새로운 API 스타일로, 컴포넌트의 로직을 더 유연하게 구성할 수 있게 해줍니다.

## 주요 기능

### ref와 reactive

```js
const count = ref(0);
const state = reactive({ message: "Hello" });
```

### computed와 watch

```js
const doubleCount = computed(() => count.value * 2);
watch(count, (newValue, oldValue) => {
  console.log(`count가 ${oldValue}에서 ${newValue}로 변경되었습니다.`);
});
```

## 장점

1. 더 나은 타입스크립트 지원
2. 로직 재사용성 향상
3. 더 나은 코드 구성

## 결론

Composition API를 사용하면 더 유지보수하기 쉽고 재사용 가능한 Vue 컴포넌트를 작성할 수 있습니다.
