---
layout: post
title:  자바스크립트 소수 계산 오류 해결하기
date:   2021-12-21 14:05:00 +0900
categories: programming
tag: [Javascript]
---


## 자바스크립트에서 소수의 합을 구하자!

```
let a = 0.1;
let b = 0.2;

console.log(a + b);
```
결과 : 0.30000000000000004 (띠용!!!!) 

왜 그러한가는 https://bigtop.tistory.com/47 <- 여기 참조


## 소수의 오류를 해결 할 계산식을 만들어보자!

```
let a = 0.1;
let b = 0.2;
let sum;

let decimal = String(a).split('.'); // 소수점의 자릿수를 구하자
let square = Math.pow(10, decimal[1].length); // 제곱

sum = Math.round((a + b) * square) / square; // 합

console.log(sum);
```
결과 : 0.3; 
