---
layout: post
title:  "미디어쿼리 가로/세로 모드"
date:   2021-05-11 15:49:00 +0900
categories: programming
tag: [css]
---


세로 모드: Portrait(포트레이트) 모드  
- 모바일/웹에서 디바이스의 width가 height보다 좁으면 적용

가로 모드: Landscape(랜드스케이프) 모드
- 모바일/웹에서 디바이스의 width가 height보다 넓으면 적용

```
@media (orientation: portrait) {
    /* 세로모드 */
  }

@media (orientation: landscape) {
    /* 가로모드 */
}

```

내용출처 : 1분코딩 (https://studiomeal.com/archives/1068)
