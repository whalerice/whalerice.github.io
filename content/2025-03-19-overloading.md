---
title: "오버로딩(Overloading)"
date: "2025-03-19"
description: "오버로딩은 함수가 여러개의 call signatures(콜시그니처)를 가지고 있을때 발생시킴"
tags: ["TypeScript"]
---

오버로딩은 함수가 여러개의 call signatures(콜시그니처)를 가지고 있을 때 발생시킵니다. 이는 같은 함수 이름으로 다른 매개변수 타입이나 개수를 가진 여러 버전의 함수를 정의할 수 있게 해줍니다.

## 1. 매개변수 타입이 다른 경우의 오버로딩

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};
```

이 예제에서는 `add` 함수가 숫자와 숫자를 더하는 경우와 숫자와 문자열을 받는 경우 두 가지 시그니처를 가지고 있습니다.

## 2. 매개변수 개수가 다른 경우의 오버로딩

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
```

이 예제에서는 `add` 함수가 두 개의 숫자를 더하는 경우와 세 개의 숫자를 더하는 경우 두 가지 시그니처를 가지고 있습니다.

## 3. 객체 타입을 사용한 오버로딩

```ts
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};
```

이 예제에서는 `push` 함수가 문자열을 직접 받는 경우와 설정 객체를 받는 경우 두 가지 시그니처를 가지고 있습니다. 이는 라우팅이나 상태 관리와 같은 실제 애플리케이션에서 자주 사용되는 패턴입니다.

## 오버로딩의 장점

1. 타입 안정성: 함수의 다양한 사용 사례에 대해 타입 체크를 할 수 있습니다.
2. 코드 가독성: 같은 기능을 하는 여러 함수를 각각 다른 이름으로 만들지 않아도 됩니다.
3. 유연성: 함수의 다양한 사용 패턴을 하나의 인터페이스로 통합할 수 있습니다.
