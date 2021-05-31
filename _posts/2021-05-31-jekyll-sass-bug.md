---
title: 'Jekyll::Converters::Scss encountered an error while converting ''assets/css/main.scss'':Internal Error: Invalid UTF-8'
layout: post
date: '2021-05-31 21:19:14'
categories:
- programming
tag: jekyll
---

```
Jekyll::Converters::Scss encountered an error while converting 'assets/css/main.scss': Internal Error: Invalid UTF-8

```

아놔.. 이거 뭐지? 
![버그1]({{site.url}}/assets/images/sass_bug_01.png){:class="img-responsive"}



아무리 검색을 해도 나오지 않았다. <br />
검색을 열심히 했는데도 해결방안이 나오지 않았는데...
폴더를 옮겼더니 됐어요라는 글을 보게 되어서 혹시나 하는 마음에 폴더를 다시 봤다.

![폴더명]({{site.url}}/assets/images/sass_bug_02.png){:class="img-responsive"}

젠장! <br />
갑자기 보이는 <span style="color:red;font-weight:bold;font-size: 1.6rem;">문서</span> ...띠용<br />

지금까지 뭐한거니?<br />
그동안 폴더 경로중에 한글이 있어서 에러가 났던 거였다.<br />
한글이 들어가지 않는 폴더 경로로 옮겨주니 바로 해결 되었다.

