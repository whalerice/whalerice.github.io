---
title: "비밀번호 유효성검사"
date: "2025-03-19"
description: "다양한 비밀번호 유효성 검사 정규식과 예제 코드"
tags: ["JavaScript", "정규식", "보안"]
---

# 비밀번호 유효성 검사 가이드

웹 애플리케이션에서 비밀번호 유효성 검사는 보안의 기본적인 요소입니다.
다음은 다양한 비밀번호 정책에 따른 유효성 검사 예제 코드입니다.

## 1. 기본적인 비밀번호 정책

`영문(대소문자) 포함 / 숫자 포함 / 특수 문자 포함 / 공백 X / 비밀번호 자리 8~20자`

```js
function chkPW() {
  var pw = $("#password").val();
  var num = pw.search(/[0-9]/g);
  var eng = pw.search(/[a-z]/gi);
  var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  if (pw.length < 8 || pw.length > 20) {
    alert("8자리 ~ 20자리 이내로 입력해주세요.");
    return false;
  } else if (pw.search(/\s/) != -1) {
    alert("비밀번호는 공백 없이 입력해주세요.");
    return false;
  } else if (num < 0 || eng < 0 || spe < 0) {
    alert("영문,숫자, 특수문자를 혼합하여 입력해주세요.");
    return false;
  } else {
    console.log("통과");
    return true;
  }
}
```

## 2. 2가지 이상 문자 조합 정책

`영문,숫자,특수문자 중 2가지 혼합 (영문,숫자 = 통과) (특문,숫자 = 통과) / 비밀번호 10~20자리`

```js
function chkPW() {
  var pw = $("#password").val();
  var num = pw.search(/[0-9]/g);
  var eng = pw.search(/[a-z]/gi);
  var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  if (pw.length < 10 || pw.length > 20) {
    alert("10자리 ~ 20자리 이내로 입력해주세요.");
    return false;
  } else if (pw.search(/\s/) != -1) {
    alert("비밀번호는 공백 없이 입력해주세요.");
    return false;
  } else if (
    (num < 0 && eng < 0) ||
    (eng < 0 && spe < 0) ||
    (spe < 0 && num < 0)
  ) {
    alert("영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
    return false;
  } else {
    console.log("통과");
    return true;
  }
}
```

## 3. 정규식 기반 강력한 비밀번호 정책

`비밀번호 8자리 이상 / 숫자 포함 / 영대 문자 포함 / 영소 문자 포함 / 특수문자 포함`

```js
function chkPW() {
  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  var pw = $("#password").val();

  if (false === reg.test(pw)) {
    alert(
      "비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다."
    );
    return false;
  } else {
    console.log("통과");
    return true;
  }
}
```

## 4. 보안 강화된 비밀번호 정책

`특수문자+영문+숫자 혼합 / 같은 문자 4번 반복 X / 아이디 포함 X`

```js
function chkPW() {
  var pw = $("#password").val();
  var id = $("#id").val();
  var checkNumber = pw.search(/[0-9]/g);
  var checkEnglish = pw.search(/[a-z]/gi);

  if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(pw)) {
    alert("숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.");
    return false;
  } else if (checkNumber < 0 || checkEnglish < 0) {
    alert("숫자와 영문자를 혼용하여야 합니다.");
    return false;
  } else if (/(\w)\1\1\1/.test(pw)) {
    alert("같은 문자를 4번 이상 사용하실 수 없습니다.");
    return false;
  } else if (pw.search(id) > -1) {
    alert("비밀번호에 아이디가 포함되었습니다.");
    return false;
  } else {
    console.log("통과");
    return true;
  }
}
```

## 5. 종합적인 비밀번호 정책

`비밀번호 8자리 이상 / 숫자 포함 / 영대 문자 포함 / 영소 문자 포함 / 특수문자 포함 / 공백 X / 같은 문자 4번 반복 X / 아이디 포함 X / 한글 X`

```js
function chkPW() {
  var pw = $("#password").val();
  var id = $("#id").val();

  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  var hangulcheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  if (false === reg.test(pw)) {
    alert(
      "비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다."
    );
    return false;
  } else if (/(\w)\1\1\1/.test(pw)) {
    alert("같은 문자를 4번 이상 사용하실 수 없습니다.");
    return false;
  } else if (pw.search(id) > -1) {
    alert("비밀번호에 아이디가 포함되었습니다.");
    return false;
  } else if (pw.search(/\s/) != -1) {
    alert("비밀번호는 공백 없이 입력해주세요.");
    return false;
  } else if (hangulcheck.test(pw)) {
    alert("비밀번호에 한글을 사용 할 수 없습니다.");
    return false;
  } else {
    console.log("통과");
    return true;
  }
}
```

## 정규식 패턴 설명

- `(?=.*?[A-Z])`: 대문자 포함
- `(?=.*?[a-z])`: 소문자 포함
- `(?=.*?[0-9])`: 숫자 포함
- `(?=.*?[#?!@$%^&*-])`: 특수문자 포함
- `.{8,}`: 최소 8자 이상
- `/(\w)\1\1\1/`: 같은 문자 4번 반복 체크
- `/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/`: 한글 포함 체크

## 보안 고려사항

1. 비밀번호는 항상 서버 측에서도 검증해야 합니다.
2. 비밀번호는 해시화하여 저장해야 합니다.
3. 로그인 시도 횟수를 제한하는 것이 좋습니다.
4. 비밀번호 변경 시 이전 비밀번호와 동일한지 확인하는 것이 좋습니다.
