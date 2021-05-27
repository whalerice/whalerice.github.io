---
layout: post
title: Material Icons을 Round로 적용
date:   2021-05-19 18:31:45 +0900
categories: programming
tag: [css]
---

# Material Icons 적용방법

[Google Fonts의 icons](https://fonts.google.com/icons) 메뉴로 들어가면 Material Icons 예제(?)와 사용방법을 볼 수 있다.

__* 사용방법__

1. [Git repository](https://github.com/google/material-design-icons) 에서 다운받아서 사용하는 방법
2. cdn주소로 사용하는 방법


<br />
<br />

## cdn주소로 사용하는 방법을 알아보자

Git repository에서 알려주는 링크
```
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
```

해당 주소로 사용할 경우 기본값인 **Filled** UI만 적용된다.
<br>
흠.. 그럼...**Outlined**, **Rounded** UI를 적용할려면?

__잘못된 예__
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons&style=outlined" rel="stylesheet" />
```

__올바른 예__
```
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined" rel="stylesheet">
```

허허허 알려줄꺼면 좀 잘보이는데 적어놔주지 불친절하기는..<br >
Git repository font 폴더에 들어가보면 README.md에 방법이 적혀져 있었다.
<br >난 왜 헤매고 다녔단 말인가.....

```
<!-- https://material.io/resources/icons/?style=baseline -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">

<!-- https://material.io/resources/icons/?style=outline -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined" rel="stylesheet">

<!-- https://material.io/resources/icons/?style=round -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Round" rel="stylesheet">

<!-- https://material.io/resources/icons/?style=sharp -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Sharp" rel="stylesheet">

<!-- https://material.io/resources/icons/?style=twotone -->
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Two+Tone" rel="stylesheet">
 ```

__한줄에 다 걸고 싶을때__
```
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
```

{% include codepen.html hash="GRWNmvV" title="MaterialIcons" %}
