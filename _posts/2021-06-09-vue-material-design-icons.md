---
layout: post
title:  material icons적용 - Vue
date:   2021-06-09 13:11:01 +0900
categories: programming
tag: [Vue]
---



## Vue에 material design icons을 적용해 보자.

제일 간편하게 사용했던 방법

### 1. 패키지 설치

```
npm i -D @mid/font
```

### 2. css 추가
css파일에 추가하거나  js파일에 추가하거나 둘중 한 곳에 추가 하면된다.

- css or scss에 추가

```
@import '~@mdi/font/css/materialdesignicons.css';
```


- mian.js에 추가

```
import '@mdi/font/css/materialdesignicons.css';
```

### 3. 사용

- 여러개 한번에 사용해야 할 때 `mdi-set` 내부에 선언한다.

```
<div class="mdi-set">
	<span class="mdi-star"></span>
	<span class="mdi-star"></span>
	<span class="mdi-star"></span>
	<span class="mdi-star-outline"></span>
	<span class="mdi-star-outline"></span>
</div>
```

- 하나만 사용하면 될 때 `mdi-set`를 함께 선언한다.

```
<i class="mdi-set mdi-ab-testing"></i>
<span class="mdi-set mdi-head-cog"></span>
```

### 참조
- [npm](https://www.npmjs.com/package/@mdi/font)
- [아이콘 리스트](https://materialdesignicons.com/)
