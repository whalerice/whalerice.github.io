---
title: "비밀번호 유효성검사"
date: "2025-03-19"
description: ""
tags: ["자바스크립트"]
---

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

<br /><br />

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
  }
}
```

<br /><br />

`비밀번호 8자리 이상 / 숫자 포함 / 영대 문자 포함 / 영소 문자 포함 / 특수문자 포함**`

```js
function chkPW() {
  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  var pw = $("#password").val();

  if (false === reg.test(pw)) {
    alert(
      "비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다."
    );
  } else {
    console.log("통과");
  }
}
```

<br /><br />

`특수문자+영문+숫자 혼합 / 같은 문자 4번 반복 X / 아이디 포함 X`

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
  }
}
```

<br /><br />

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
  } else {
    console.log("통과");
  }
}
```
