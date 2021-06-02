---
layout: post
title:  React Setting(CRA)
date:   2021-06-02 15:17:01 +0900
categories: programming
tag: [React]
---

# 프로젝트 생성
```
npm init react-app my-app
```

## create-react-app의 특징
- CRA(create-react-app)는 리액트 프로젝트를 처음 실행할 때 필요한 여러가지 라이브러리나 웹팩의 설정 없이 간편하게 프로젝트를 시작할 수 있다.
- 단 하나의 one build dependency를 가지게 되므로 React프로젝트를 구성할 때 필요한 Webpack, Babel, ESLint 등 간의 연결에 대해서 신경쓰지 않아도 된다.
- 프로젝트에 필요한 필수적인 설정(Configuration)을 대신 해준다.
- Autoprefixer를 지원해준다. 즉, 일반적인 CSS코드 생성을 하게 되면 자동으로 -webkit-, -ms- 등을 자동으로 적용해준다.
- 설정이 숨겨져 있어 설정을 수정하거나 추가하려면 npm run eject을 실행하여 설정이 보여지도록 해야한다. 단, 한번 실행하면 다시 되돌릴 수 없다.


<br />
<br />
<br />


## React UI framework 설치

```
npm i @material-ui/core
npm i @material-ui/icons
npm i material-ui-toggle-icon // 아이콘 애니메이션 패키지
```
<br />
<br />
<br />

## React-App-Rewired, Customize-CRA 설치 및 설정

eject는 설정을 자유롭게 customizing  할 수 있는 장점이 있지만 One Build Dependency의 장점을 잃게 된다.
찾아보니 eject를 대체할 패키지를 설치하여 설정을 변경하는 걸 추천하였다. [(CRA eject 하지 않고 optional chaining 사용하기)](https://dohoons.com/blog/1942/)

```
npm i -D react-app-rewired customize-cra @babel/plugin-proposal-optional-chaining
```
- `react-app-rewired / customize-cra` : CRA 환경을 override 할 수 있게 해주는 패키
- `@babel/plugin-proposal-optional-chaining` : [optional chaining 문법을 변환해주는 바벨 플러그인](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)

### package.json 수정

react-scripts  -> react-app-rewired 수정
```
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build"
}
```
<br />

### config-overrides.js, .babelrc(babel config파일) 생성 (package.json와 같은 위치)
- config-overrides.js : babel config파일을 override할 수 있도록 코드를 작성

```
const { useBabelRc, addWebpackPlugin, override } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
	useBabelRc(),
	addWebpackPlugin(
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
	),
);
```


- .babelrc : optional chaining에 대한 플러그인을 연결

```
{  
    "plugins": [  
        [  
            "@babel/plugin-proposal-optional-chaining"  
        ],  
    ]  
}
```

<br />
<br />
<br />

## Sass 적용

```
npm i node-sass
```
<br />
<br />
<br />

##  Router 적용
```
npm i react-router-dom
```
 [라우터 적용방법](https://react.vlpt.us/react-router/01-concepts.html)

<br />
<br />
<br />

## Eslint / Prettier 적용
airbnb 스타일 가이드[(링크)](https://github.com/apple77y/javascript/tree/master/react)를 적용 (사용이유 : airbnb의 스타일 가이드는 자바 스크립트에 대한 합리적인 접근법을 알려준다고 한다.)
```
npm i -D eslint-config-airbnb eslint-config-prettier
```

<br />
<br />
<br />

## PropTypes
작업하는 프로젝트의 규모가 커질 수록 생각지 못한 곳에서 에러가 발생하는 일이 잦아진다. 이를 방지하기 위한 방법으로, PropTypes를 활용하여 타입(type)을 확인하는 것이 대표적이다.
```
npm i prop-types
```


<br />

---

<br />

## 데이터 관련 셋팅

<br /><br />

### Redux

리덕스는, 가장 사용률이 높은 상태관리 라이브러리입니다. 
컴포넌트들의 상태 관련 로직들을 다른 파일들로 분리시켜서 더욱 효율적으로 관리 할 수 있다. 또한, 컴포넌트끼리 상태를 공유하게 될 때 여러 컴포넌트를 거치지 않고도 손쉽게 상태 값을 전달 할 수 있다.
추가적으로, 리덕스의 미들웨어라는 기능을 통하여 비동기 작업, 로깅 등의 확장적인 작업들을 더욱 쉽게 할 수도 있게 해준다. [https://react.vlpt.us/redux/](https://react.vlpt.us/redux/) 
```
npm i redux
npm i react-redux

npm i -D redux-devtools-extension
```

- `redux-devtools-extension` : 스토어 값이 바뀌는 상태를 쉽게 확인 할 수 있다. [크롬 브라우저 확장프로그램](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko-KR)설치와 연동하기 위해 툴킷을 설치한다. [(셋팅방법)](https://react.vlpt.us/redux/06-redux-devtools.html)

<br />

### Redux Saga

리덕스 사가는 리액트 리덕스의 사이드이펙트만을 담당하는 미들웨어중 하나입니다. 리덕스 사가를 이용하여 비동기 액션처리를 한다.
액션을 모니터링하고 있다가, 특정 액션이 발생하면 이에 따라 특정 작업을 하는 방식으로 사용한다.  [Generator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator) 문법을 사용한다. ( [추가설명링크1](https://react.vlpt.us/redux-middleware/10-redux-saga.html) / [추가설명링크2](https://simsimjae.medium.com/%EB%A6%AC%EB%8D%95%EC%8A%A4-%EC%82%AC%EA%B0%80-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-8e573de9786e) )
```
npm i redux-saga
```

<br />

### Axios
Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다. [axios/axios](https://github.com/axios/axios)
```
npm i axios
```

<br />

### Moment/React Moment
eact-moment는 react에서 moment를 편리하게 사용할 수 있게 만들어 놓은 라이브러리입니다. react-moment는 moment가 dependency되어 있기 때문에 moment 부터 설치해주어야 합니다.
react-moment는 별다른 작업을 하지않아도 실시간으로 시간이 변하게 제공을 해줍니다. [headzoo/react-moment ](https://github.com/headzoo/react-moment)

```
npm i moment react-moment
```


<br />

---

<br />

## 그외
<br />

### react-rnd
drag&resize 기능 [bokuweb/react-rnd](https://github.com/bokuweb/react-rnd)

### chartiq
npm 파일이 없으므로 로컬 파일을 이용하여 node_module에 설치 [(가이드)](https://documentation.chartiq.com/)
```
npm i jquery
npm i ./chartiq-8.0.0.tgz
```
