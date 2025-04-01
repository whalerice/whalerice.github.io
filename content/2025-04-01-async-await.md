---
title: "JavaScript의 async/await 이해하기"
date: "2025-04-01"
description: "JavaScript에서 비동기 프로그래밍을 더 쉽게 만드는 async/await 문법에 대해 알아보겠습니다."
tags: ["JavaScript", "비동기 프로그래밍", "async/await"]
---

JavaScript에서 비동기 프로그래밍을 처리하는 방법은 시간이 지날수록 더욱 발전해왔습니다. 콜백 함수에서 Promise, 그리고 현재 널리 사용되는 async/await까지. 이번 포스트에서는 async/await의 개념과 사용법에 대해 자세히 살펴보겠습니다.

## async/await란?

async/await는 Promise를 기반으로 한 문법적 설탕(syntactic sugar)입니다. 비동기 코드를 동기 코드처럼 보이게 만들어주어 코드의 가독성과 유지보수성을 크게 향상시킵니다.

## async 함수

async 키워드는 함수 선언 앞에 붙여서 사용합니다. 이 함수는 항상 Promise를 반환합니다.

```javascript
async function fetchData() {
  return "데이터";
}
```

## await 키워드

await는 async 함수 내부에서만 사용할 수 있으며, Promise가 resolve될 때까지 기다립니다.

```javascript
async function getUserData() {
  const response = await fetch("https://api.example.com/user");
  const data = await response.json();
  return data;
}
```

## 에러 처리

try/catch 구문을 사용하여 async/await의 에러를 처리할 수 있습니다.

```javascript
async function fetchUserData() {
  try {
    const response = await fetch("https://api.example.com/user");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("데이터를 가져오는데 실패했습니다:", error);
  }
}
```

## Promise와의 비교

async/await를 사용하면 Promise 체인보다 더 읽기 쉽고 이해하기 쉬운 코드를 작성할 수 있습니다.

```javascript
// Promise 체인
fetch("https://api.example.com/user")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// async/await
async function getUser() {
  try {
    const response = await fetch("https://api.example.com/user");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

## 병렬 실행

여러 비동기 작업을 병렬로 실행하려면 Promise.all()을 사용할 수 있습니다.

```javascript
async function fetchMultipleData() {
  const [users, posts, comments] = await Promise.all([
    fetch("/api/users").then((res) => res.json()),
    fetch("/api/posts").then((res) => res.json()),
    fetch("/api/comments").then((res) => res.json()),
  ]);
  return { users, posts, comments };
}
```

## 결론

async/await는 JavaScript의 비동기 프로그래밍을 더욱 직관적이고 관리하기 쉽게 만들어주는 강력한 도구입니다. Promise를 기반으로 하면서도, 동기 코드처럼 보이는 비동기 코드를 작성할 수 있게 해주어 개발자들의 생산성을 크게 향상시킵니다.

이 문법을 적절히 활용하면 복잡한 비동기 로직도 깔끔하고 이해하기 쉽게 구현할 수 있습니다.
