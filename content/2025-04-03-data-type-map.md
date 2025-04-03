---
title: "자바스크립트 Map 자료형: 키-값 쌍의 효율적인 관리"
date: "2025-04-03"
description: "자바스크립트의 Map 자료형에 대해 알아보고, 실제 사용 예시를 통해 이해해봅시다."
tags: ["javascript", "map", "자료구조", "프로그래밍"]
---

자바스크립트의 특별한 자료형인 `Map`에 대해 이야기해보려고 합니다.<br />
Map은 키-값 쌍을 효율적으로 관리할 수 있는 자료구조입니다.

<br/><br/>

## Map이란 무엇인가요?

Map은 ES6(ECMAScript 2015)에서 도입된 새로운 자료구조로, 키-값 쌍을 저장하고 관리할 수 있게 해줍니다.<br />
일반 객체와 비슷해 보이지만, Map은 다음과 같은 특징이 있습니다:

- 키로 어떤 타입이든 사용 가능 (객체는 문자열이나 심볼만 가능)
- 삽입 순서가 보장됨
- 크기를 쉽게 알 수 있음
- 반복이 용이함

<br/><br/>

## Map 생성하기

Map을 만드는 방법은 매우 간단합니다:

```javascript
// 빈 Map 생성
const emptyMap = new Map();

// 배열로부터 Map 생성
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  [1, "number key"],
  [{}, "object key"],
]);
```

## Map의 주요 메서드들

### 1. 값 추가하기 (set)

```javascript
const map = new Map();
map.set("name", "홍길동");
map.set("age", 25);
map.set("city", "서울");
```

### 2. 값 가져오기 (get)

```javascript
const map = new Map([
  ["name", "홍길동"],
  ["age", 25],
]);
console.log(map.get("name")); // '홍길동'
console.log(map.get("age")); // 25
```

### 3. 값 삭제하기 (delete)

```javascript
const map = new Map([
  ["name", "홍길동"],
  ["age", 25],
]);
map.delete("age"); // true 반환
console.log(map); // Map(1) { 'name' => '홍길동' }
```

### 4. 키 존재 확인하기 (has)

```javascript
const map = new Map([
  ["name", "홍길동"],
  ["age", 25],
]);
console.log(map.has("name")); // true
console.log(map.has("city")); // false
```

### 5. 크기 확인하기 (size)

```javascript
const map = new Map([
  ["name", "홍길동"],
  ["age", 25],
  ["city", "서울"],
]);
console.log(map.size); // 3
```

## Map의 실제 활용 예시

### 1. 사용자 세션 관리

```javascript
const userSessions = new Map();

function createSession(userId, sessionData) {
  userSessions.set(userId, {
    ...sessionData,
    createdAt: new Date(),
    lastActive: new Date(),
  });
}

function updateLastActive(userId) {
  const session = userSessions.get(userId);
  if (session) {
    session.lastActive = new Date();
    userSessions.set(userId, session);
  }
}

function removeSession(userId) {
  userSessions.delete(userId);
}
```

### 2. 캐시 구현

```javascript
const cache = new Map();

function getCachedData(key) {
  if (cache.has(key)) {
    const { data, timestamp } = cache.get(key);
    // 1시간 이내의 캐시만 유효
    if (Date.now() - timestamp < 3600000) {
      return data;
    }
    cache.delete(key);
  }
  return null;
}

function setCachedData(key, data) {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
}
```

### 3. Map 순회하기

```javascript
const map = new Map([
  ["name", "홍길동"],
  ["age", 25],
  ["city", "서울"],
]);

// 키-값 쌍 순회
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// 키만 순회
for (const key of map.keys()) {
  console.log(key);
}

// 값만 순회
for (const value of map.values()) {
  console.log(value);
}

// Map을 배열로 변환
const entries = Array.from(map.entries());
const keys = Array.from(map.keys());
const values = Array.from(map.values());
```

<br/><br/>

## Map의 장점

1. **다양한 키 타입**: 객체는 문자열이나 심볼만 키로 사용할 수 있지만, Map은 어떤 타입이든 키로 사용 가능합니다.
2. **순서 보장**: 삽입 순서가 보장되어 있어 순회할 때 예측 가능한 순서로 데이터를 얻을 수 있습니다.
3. **성능**: 빈번한 추가/삭제 작업에서 객체보다 더 나은 성능을 보입니다.
4. **크기 확인**: `size` 속성으로 쉽게 크기를 알 수 있습니다.

<br/><br/>

## 주의사항

1. JSON 직렬화가 되지 않습니다. Map을 JSON으로 변환하려면 별도의 변환 작업이 필요합니다:

```javascript
const map = new Map([
  ["name", "홍길동"],
  ["age", 25],
]);

// Map을 JSON으로 변환
const json = JSON.stringify(Array.from(map.entries()));

// JSON을 Map으로 변환
const map2 = new Map(JSON.parse(json));
```

2. 객체와 달리 Map은 프로토타입 체인의 영향을 받지 않습니다. 이는 보안상의 이점이 있습니다.

<br/><br/>
