---
title: jekyll 포스트에 이미지 등록하기
layout: post
date: '2021-05-31 21:19:14'
categories:
- programming
tag: jekyll
---


글에 이미지를 넣고 싶다면 아래 처럼 적으면 글에 이미지를 등록할 수 있다.
```

![alt텍스트]]({{site.url}}/assets/images/이미지명.jpg)

```

![이미지테스트]({{site.url}}/assets/images/service-428539_1920.jpg){:class="img-responsive"}

이미지에 class를 적용하고 싶다면

```

![alt텍스트]({{site.url}}/assets/images/이미지명.jpg){:class="원하는class명"}

```
