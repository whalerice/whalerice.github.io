---
title: "오버로딩(Overloading)"
date: "2025-03-19"
description: "오버로딩은 함수가 여러개의 call signatures(콜시그니처)를 가지고 있을때 발생시킴"
tags: ["타입스크립트"]
---

오버로딩은 함수가 여러개의 call signatures(콜시그니처)를 가지고 있을때 발생시킴

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
  if (typeof config === "stirng") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};
```
