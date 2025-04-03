---
title: "자바스크립트 Set 자료형: 중복 없는 데이터 관리의 시작"
date: "2025-04-02"
description: "자바스크립트의 Set 자료형에 대해 알아보고, 실제 사용 예시를 통해 이해해봅시다."
tags: ["javascript", "set", "자료구조", "프로그래밍"]
---

자바스크립트의 특별한 자료형인 `Set`에 대해 이야기해보려고 합니다.<br />
Set은 중복을 허용하지 않는 값들의 집합을 다룰 때 매우 유용한 자료구조입니다.

<br/><br/>

## Set이란 무엇인가요?

Set은 ES6(ECMAScript 2015)에서 도입된 새로운 자료구조로, 중복되지 않는 값들의 집합을 다룰 수 있게 해줍니다.<br />
배열과 비슷해 보이지만, Set은 값의 순서를 보장하지 않으며 중복된 값을 자동으로 제거한다는 특징이 있습니다.

<br/><br/>

## Set 생성하기

Set을 만드는 방법은 매우 간단합니다:

```javascript
// 빈 Set 생성
const emptySet = new Set();

// 배열로부터 Set 생성
const numberSet = new Set([1, 2, 3, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
const fruitSet = new Set(["사과", "바나나", "사과", "오렌지"]); // ['사과', '바나나', '오렌지']
```

## Set의 주요 메서드들

### 1. 값 추가하기 (add)

```javascript
const set = new Set();
set.add(1);
set.add("안녕하세요");
set.add({ name: "홍길동" });
```

### 2. 값 삭제하기 (delete)

```javascript
const set = new Set([1, 2, 3, 4, 5]);
set.delete(3); // true 반환
console.log(set); // Set(4) { 1, 2, 4, 5 }
```

### 3. 값 확인하기 (has)

```javascript
const set = new Set(["사과", "바나나", "오렌지"]);
console.log(set.has("사과")); // true
console.log(set.has("포도")); // false
```

### 4. 크기 확인하기 (size)

```javascript
const set = new Set([1, 2, 3, 4, 5]);
console.log(set.size); // 5
```

## Set의 실제 활용 예시

### 1. 중복 제거하기

```javascript
const numbers = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
```

### 2. 유니크한 사용자 ID 관리

```javascript
const activeUsers = new Set();

function userLogin(userId) {
  activeUsers.add(userId);
  console.log(`${userId}님이 로그인했습니다.`);
}

function userLogout(userId) {
  activeUsers.delete(userId);
  console.log(`${userId}님이 로그아웃했습니다.`);
}

userLogin("user1"); // user1님이 로그인했습니다.
userLogin("user2"); // user2님이 로그인했습니다.
userLogin("user1"); // user1님이 로그인했습니다. (중복 추가는 무시됨)
console.log(activeUsers.size); // 2
```

### 3. 교집합, 합집합, 차집합 구현

```javascript
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// 합집합
const union = new Set([...setA, ...setB]);
console.log([...union]); // [1, 2, 3, 4, 5, 6]

// 교집합
const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log([...intersection]); // [3, 4]

// 차집합
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log([...difference]); // [1, 2]
```

<br/><br/>

## Set의 장점

1. **중복 제거**: 자동으로 중복된 값을 제거합니다.
2. **성능**: 값의 존재 여부를 확인하는 작업이 배열보다 빠릅니다.
3. **간단한 API**: 직관적이고 사용하기 쉬운 메서드들을 제공합니다.

<br/><br/>

## 주의사항

1. Set은 객체 참조를 저장할 때도 중복을 체크합니다:

```javascript
const set = new Set();
const obj1 = { name: "홍길동" };
const obj2 = { name: "홍길동" };

set.add(obj1);
set.add(obj2);
console.log(set.size); // 2 (다른 객체로 인식)
```

2. Set은 순서를 보장하지 않습니다. 순서가 중요한 경우에는 배열을 사용하는 것이 좋습니다.

<br/><br/>

## 마치며

Set은 중복 없는 데이터를 다룰 때 매우 유용한 자료구조입니다. 특히 사용자 ID 관리, 태그 관리, 중복 제거 등 다양한 상황에서 활용할 수 있습니다. 이제 여러분의 코드에서도 Set을 활용해보세요! 😊

더 자세한 내용이나 궁금한 점이 있다면 댓글로 남겨주세요. 함께 공부해요! 💪
