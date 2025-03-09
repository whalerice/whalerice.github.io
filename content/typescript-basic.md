---
title: "TypeScript 기초부터 실전까지"
description: "TypeScript의 기본 문법과 실제 프로젝트에서의 활용법을 다룹니다."
date: "2024-03-17"
tags: ["TypeScript", "JavaScript", "개발환경"]
---

## TypeScript란?

TypeScript는 JavaScript에 타입을 추가한 언어입니다. Microsoft에서 개발했으며, 대규모 애플리케이션 개발에 매우 유용합니다.

### 기본 타입

```typescript
// 기본 타입 선언
let name: string = "홍길동";
let age: number = 25;
let isStudent: boolean = true;

// 배열
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["홍길동", "김철수"];

// 객체
interface User {
  name: string;
  age: number;
}
```

## 제네릭 사용하기

```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```
