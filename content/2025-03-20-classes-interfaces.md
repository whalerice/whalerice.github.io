---
title: "Classes & Interfaces"
date: "2025-03-20"
description: "타입스크립트의 클래스와 인터페이스에 대한 상세 설명"
tags: ["타입스크립트"]
---

## Classes (클래스)

### Abstract Class (추상 클래스)

추상 클래스는 다른 클래스가 상속받을 수 있는 기본 클래스이지만, 직접 인스턴스를 생성할 수 없습니다.

```ts
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {}

const nico = new Player("nico", "las", "니꼬");
nico.getFullName(); // 정상 작동

// 추상 클래스는 직접 인스턴스화할 수 없음
const test = new User("nico", "las", "니꼬"); // 에러 발생
```

### 접근 제어자 (Access Modifiers)

1. **private**

   - 클래스 외부에서 접근 불가
   - 자식 클래스에서도 접근 불가
   - 가장 엄격한 접근 제어

2. **protected**

   - 클래스 외부에서 접근 불가
   - 자식 클래스에서는 접근 가능
   - 상속 관계에서 유용

3. **public**
   - 어디서든 접근 가능
   - 기본값

```ts
abstract class User {
  constructor(
    private firstName: string, // private: 외부 접근 불가
    protected lastName: string, // protected: 자식 클래스에서 접근 가능
    public nickname: string // public: 어디서든 접근 가능
  ) {}

  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### Readonly 프로퍼티

`readonly` 키워드를 사용하면 프로퍼티의 값을 한 번 설정한 후 변경할 수 없습니다.

```ts
class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
kimchi.def = "xxxx"; // 에러 발생: readonly 프로퍼티는 변경할 수 없음
```

## Interfaces (인터페이스)

인터페이스는 객체의 구조를 정의하는 방법으로, 클래스가 구현해야 할 메서드와 프로퍼티를 명시합니다.

### 인터페이스 구현 예시

```ts
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}
```

### 인터페이스 vs 추상 클래스

1. **인터페이스**

   - 구현 세부사항 없이 구조만 정의
   - 다중 구현 가능
   - 컴파일 시 JavaScript 코드로 변환되지 않음

2. **추상 클래스**
   - 구현 세부사항 포함 가능
   - 단일 상속만 가능
   - JavaScript 클래스로 변환됨

### 컴파일된 JavaScript 코드

```js
"use strict";
class Player {
  constructor(firstName, lastName, health) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.health = health;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}
```
