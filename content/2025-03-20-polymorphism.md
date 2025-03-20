---
title: "다형성(Polymorphism)"
date: "2025-03-20"
description: "기본적으로 함수는 여러가지 다른 모양, 다른 형태를 가지고 있으며, overloading처럼 다른 2~3 개의 파라미터을 가질 수 있다. 또는, Typescript에서의 함수는 string이나 object를 첫 번째 파라미터로 가질 수 있다. 이런 모든 것은 Polymorphism(다형성)이라고 할 수 있다."
tags: ["타입스크립트"]
---

기본적으로 함수는 여러가지 다른 모양, 다른 형태를 가지고 있으며, `overloading`처럼 다른 2~3 개의 파라미터을 가질 수 있다.
<br />
또는, Typescript에서의 함수는 `string`이나 `object`를 첫 번째 파라미터로 가질 수 있다.
<br />

이런 모든 것은 **Polymorphism(다형성)** 이라고 할 수 있다.

<br /><br />

**generic(제네릭) type 개념**

타입의 _placeholder_ 같은 것으로 `concrete type` 를 대신해서 사용할 수 있다.

_placeholder_ 를 이용해서 **전달하는 인자**를 **추론**하여 **함수를 실행**하는 것이다.

<br /><br />

### generic type을 왜 사용할까?

_call signature_ 를 작성할 때, 여기 들어올 확실한 타입을 모를 때 **generic type**을 사용한다.

<br /><br />

#### return 하는 generic type

```ts
// call signature
type SuperPrint = {
  <TypePlaceHolder>(arr: TypePlaceHolder[]): TypePlaceHolder;
};

// call signature
type SuperPrint = <T>(arr: T[]) => T;

// 함수 구현
const superPrint: SuperPrint = (arr) => arr[0];

// 함수 실행
const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(["a", "b", "c"]);
const d = superPrint([1, 2, true, false, "hello"]);
```

<br /><br />

#### 복수의 generic type

```ts
type SuperPrint = {
  (arr: T[], x: M): T;
};

const superPrint: SuperPrint = (arr, x) => arr[0];

let a = superPrint([1, "b", true], "hi");
```

<br /><br />

ex)

```ts
function superPrint<T>(a: T[]) {
  return a[0];
}
// 해당 배열의 타입을 타입스크립트가 추론함
const a = superPrint([1, 2, 3, 4]);

// <E>에 무엇이 들어가도 상관없음 대문자로 시작하시만 하면됨
type Player<E> = {
  name: string;
  extraInfo: E;
};

const nico: Player<{ favFood: string }> = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};

type NicoPlayer = Player<{ favFood: string }>;

const nico2: NicoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi",
  },
};

type NicoExtra = {
  favFood: string;
};

type NicoPlayer = Player<NicoExtra>;
```
