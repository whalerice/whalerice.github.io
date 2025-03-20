---
title: "Classes & Interfaces"
date: "2025-03-20"
description: ""
tags: ["타입스크립트"]
---

### Classes

```ts
// abstract class (추상클래스)는 다른 클래스가 상속 받을 수 있는 클래스
// 하지만 이 클래스는 직접 새로운 인스턴스를 만들 수 없음
// 오직 다른곳에서 상속받을 수만 있는 클래스
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

// 추상클래스는 직접 새로운 인스턴스를 말들 수 없다는 예시
// Cannot create an instance of an abstract class.
const test = new User("nico", "las", "니꼬"); // 사용불가

// User를 상속 받았기 때문에 추상클래스 User 내의 메소드 사용 가능
nico.getFullName();

abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}

  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// function에 private를 사용하게 되면 더이상 작동하지 않음
nico.getFullName(); // 사용불가
```

<br> <br>

프로퍼티를 `private` 로 선언하면 아무리 상속을 받았다고 하더라도 사용 불가
<br>

`protected` 는 `private` 과는 다름
<br>

private로 선언된 프로퍼티는 인스턴스 밖에서 접근할수가 없고, 다른 자식 클래스에서도 접근할 수 없음.
<br>

필드가 외부로부터는 보호되지만 다른 자식 클래스에서는 사용되기를 원한다면 private는 쓰지말기
<br>

대신 `protected` 를 사용
<br>
<br>

#### 오버라이이딩 방지 readonly 사용

```ts
class Word {
    constructor(
        public readonly term: string,
        public readonly def: string
    ){}
}
const kimchi = new Word("kimchi", '한국의 음식');

kimchi.def = 'xxxx' /-> 사용불가
```

<br>
<br>

### Interfaces

#### 추상클래스 대신 인터페이스를 사용한 예시

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

<br />

```ts
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
