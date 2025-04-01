---
title: "Optional Chaining (옵셔널 체이닝)"
date: "2025-03-30"
description: "자바스크립트의 Optional Chaining 연산자(?.)에 대해 알아보고 실제 사용 예시를 살펴봅니다."
tags: ["JavaScript"]
---

Optional Chaining은 자바스크립트 ES2020에서 도입된 기능으로, 객체의 속성에 안전하게 접근할 수 있게 해주는 연산자입니다. `?.` 연산자를 사용하여 구현됩니다.

## 왜 Optional Chaining이 필요한가?

객체의 중첩된 속성에 접근할 때, 중간 속성이 `undefined` 또는 `null`인 경우 에러가 발생할 수 있습니다. Optional Chaining은 이러한 상황에서 코드가 중단되지 않고 `undefined`를 반환하도록 해줍니다.

### 전통적인 방식

```javascript
const user = {
  address: {
    street: "Main St",
  },
};

// 안전하지 않은 접근
console.log(user.address.street); // 'Main St'
console.log(user.contact.email); // TypeError: Cannot read property 'email' of undefined
```

### Optional Chaining 사용

```javascript
const user = {
  address: {
    street: "Main St",
  },
};

// 안전한 접근
console.log(user?.address?.street); // 'Main St'
console.log(user?.contact?.email); // undefined
```

## 주요 사용 사례

### 1. 메서드 호출

```javascript
const user = {
  greet() {
    return "Hello!";
  },
};

console.log(user?.greet?.()); // 'Hello!'
console.log(user?.nonexistentMethod?.()); // undefined
```

### 2. 배열 접근

```javascript
const users = [{ name: "John" }, { name: "Jane" }];

console.log(users?.[0]?.name); // 'John'
console.log(users?.[5]?.name); // undefined
```

### 3. API 응답 처리

```javascript
const response = {
  data: {
    user: {
      profile: {
        name: "John Doe",
      },
    },
  },
};

const userName = response?.data?.user?.profile?.name;
console.log(userName); // 'John Doe'
```

## 주의사항

1. Optional Chaining은 `undefined`와 `null`에 대해서만 작동합니다. 다른 falsy 값(0, '', false)에는 영향을 주지 않습니다.

2. Optional Chaining은 읽기 전용 연산자입니다. 할당 연산자와 함께 사용할 수 없습니다.

```javascript
const obj = {};
obj?.property = 'value'; // SyntaxError
```

## 결론

Optional Chaining은 코드의 안정성을 높이고 에러를 방지하는 데 매우 유용한 기능입니다. 특히 API 응답 처리나 복잡한 객체 구조를 다룰 때 유용하게 사용할 수 있습니다. 하지만 과도한 사용은 코드의 의도를 불명확하게 만들 수 있으므로, 적절한 상황에서만 사용하는 것이 좋습니다.
