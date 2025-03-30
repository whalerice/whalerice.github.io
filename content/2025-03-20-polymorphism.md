---
title: "다형성(Polymorphism)"
date: "2025-03-20"
description: "다형성은 객체 지향 프로그래밍의 핵심 개념 중 하나로, 같은 인터페이스를 통해 여러 다른 형태의 객체를 다룰 수 있게 해주는 기능입니다. TypeScript에서는 제네릭을 통해 다형성을 구현할 수 있습니다."
tags: ["타입스크립트", "다형성", "제네릭"]
---

## 다형성(Polymorphism)이란?

다형성은 객체 지향 프로그래밍의 핵심 개념 중 하나입니다. 같은 인터페이스를 통해 여러 다른 형태의 객체를 다룰 수 있게 해주는 기능을 의미합니다.

TypeScript에서 다형성은 다음과 같은 형태로 구현됩니다:

1. 함수 오버로딩: 같은 함수 이름으로 다른 파라미터를 받는 여러 버전의 함수를 정의
2. 제네릭: 타입을 파라미터화하여 다양한 타입에 대해 동작하는 코드를 작성

<br /><br />

## 제네릭(Generic) 타입

제네릭은 타입의 *placeholder*로, 구체적인 타입을 대신해서 사용할 수 있는 기능입니다. 이를 통해 타입 안정성을 유지하면서도 다양한 타입에 대해 동작하는 코드를 작성할 수 있습니다.

### 제네릭을 사용하는 이유

1. 타입 안정성 보장
2. 코드 재사용성 향상
3. 유연한 타입 처리 가능

<br /><br />

### 기본적인 제네릭 사용 예시

```ts
// 함수 오버로딩 방식
type SuperPrint = {
  <TypePlaceHolder>(arr: TypePlaceHolder[]): TypePlaceHolder;
};

// 화살표 함수 방식
type SuperPrint = <T>(arr: T[]) => T;

// 함수 구현
const superPrint: SuperPrint = (arr) => arr[0];

// 다양한 타입으로 함수 실행
const a = superPrint([1, 2, 3, 4]); // number[]
const b = superPrint([true, false, true]); // boolean[]
const c = superPrint(["a", "b", "c"]); // string[]
const d = superPrint([1, 2, true, false, "hello"]); // (number | boolean | string)[]
```

<br /><br />

### 복수의 제네릭 타입

```ts
type SuperPrint = {
  <T, M>(arr: T[], x: M): T;
};

const superPrint: SuperPrint = (arr, x) => arr[0];

// 다양한 타입 조합으로 사용 가능
let a = superPrint([1, "b", true], "hi"); // T: number | string | boolean, M: string
```

<br /><br />

### 실제 활용 예시

```ts
// 제네릭 함수 정의
function superPrint<T>(a: T[]) {
  return a[0];
}

// 타입 추론을 통한 사용
const a = superPrint([1, 2, 3, 4]); // T는 number로 추론됨

// 제네릭 타입을 사용한 인터페이스 정의
type Player<E> = {
  name: string;
  extraInfo: E;
};

// 다양한 형태의 Player 타입 사용
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

// 타입 별칭을 사용한 재사용
type NicoExtra = {
  favFood: string;
};

type NicoPlayer = Player<NicoExtra>;

const nico2: NicoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi",
  },
};
```

## 제네릭의 장점

1. **타입 안정성**: 컴파일 시점에서 타입 오류를 잡아낼 수 있습니다.
2. **코드 재사용**: 다양한 타입에 대해 동일한 로직을 재사용할 수 있습니다.
3. **유연성**: 타입을 파라미터화하여 다양한 상황에 대응할 수 있습니다.
4. **가독성**: 타입 정보가 명확하게 드러나 코드의 의도를 파악하기 쉽습니다.
