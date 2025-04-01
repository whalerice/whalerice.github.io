---
title: "자바스크립트 Predicate 이해하기"
date: "2025-03-30"
description: "자바스크립트에서 Predicate의 개념과 활용 방법에 대해 알아봅니다."
tags: ["JavaScript"]
---

Predicate는 프로그래밍에서 참(true) 또는 거짓(false)을 반환하는 함수를 의미합니다. 자바스크립트에서 Predicate는 배열 메서드나 조건문에서 자주 사용되는 중요한 개념입니다.

## Predicate의 기본 개념

Predicate는 주로 다음과 같은 특징을 가집니다:

1. 하나 이상의 매개변수를 받습니다
2. 항상 boolean 값을 반환합니다
3. 주로 조건을 검사하는 용도로 사용됩니다

## 자주 사용되는 Predicate 예시

### 1. 배열 메서드에서의 Predicate

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 짝수인지 확인하는 Predicate
const isEven = (num) => num % 2 === 0;

// filter 메서드에서 Predicate 사용
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// some 메서드에서 Predicate 사용
const hasEvenNumber = numbers.some(isEven);
console.log(hasEvenNumber); // true
```

### 2. 객체 검증에서의 Predicate

```javascript
const user = {
  name: "홍길동",
  age: 25,
  email: "hong@example.com",
};

// 유효성 검사를 위한 Predicate들
const isValidName = (name) => name.length >= 2;
const isValidAge = (age) => age >= 0 && age <= 120;
const isValidEmail = (email) => email.includes("@");

// Predicate들을 조합하여 사용
const isValidUser = (user) =>
  isValidName(user.name) && isValidAge(user.age) && isValidEmail(user.email);
```

## Predicate의 장점

1. **재사용성**: 한 번 정의한 Predicate를 여러 곳에서 재사용할 수 있습니다.
2. **가독성**: 조건 로직을 명확하게 표현할 수 있습니다.
3. **유지보수성**: 조건 변경이 필요할 때 한 곳만 수정하면 됩니다.
4. **테스트 용이성**: Predicate는 순수 함수이므로 단위 테스트가 쉽습니다.

## 고급 Predicate 활용

### 1. Predicate 조합

```javascript
const isPositive = (num) => num > 0;
const isInteger = (num) => Number.isInteger(num);

// Predicate 조합
const isPositiveInteger = (num) => isPositive(num) && isInteger(num);
```

### 2. 커링을 활용한 Predicate

```javascript
const greaterThan = (threshold) => (value) => value > threshold;
const lessThan = (threshold) => (value) => value < threshold;

const isBetween = (min, max) => (value) =>
  greaterThan(min)(value) && lessThan(max)(value);

const isInRange = isBetween(0, 100);
console.log(isInRange(50)); // true
```

## 결론

Predicate는 자바스크립트에서 조건부 로직을 표현하는 강력한 도구입니다. 특히 배열 메서드나 객체 검증에서 자주 사용되며, 코드의 재사용성과 가독성을 높이는 데 도움을 줍니다. Predicate를 적절히 활용하면 더 깔끔하고 유지보수하기 쉬운 코드를 작성할 수 있습니다.
