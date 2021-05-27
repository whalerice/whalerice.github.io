---
layout: post
title: React Setting
date:   2021-05-05 14:53:45 +0900
categories: programming
tag: [React]
---

# React Projet Setting

- 프로젝트폴더 생성
- 프로젝트 폴더 내 **front** 폴더 생성

### **1. Front Setting**

- front 폴더 내 `npm init` 으로 `package.json` 생성
- 필요한 packge 설치

```
npm i react react-dom next prop-types redux react-redux 
```
```
npm i -D nodemon webpack
```
- ui관련 
```
npm i @material-ui/core @material-ui/icons
```

- redux-saga 관련 packge 설치
```
npm i next-redux-wrapper redux-saga next-redux-saga axios
```

- **eslint** 및 관련 플러그인 설치하기

```
npm i -D eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-config-airbnb eslint-plugin-jsx-a11y
```

- `.eslintrc` 파일 생성
  - **airbnb**(`eslint-config-airbnb`)의 규칙은 엄격해서 `rules`를 이용해서 사용하기 불편한 부분을 끄면 된다.

```
{
	"parserOptions": {
		"ecmaVersion": 2019,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"env": {
		"browser": true,
		"node": true,
	},
	"extends": [
		"airbnb" // eslint의 규칙을 airbnb의 규칙을 따르겠다는 뜻임
	],
	"plugins": [
		"import",
		"react-hooks"
	],
	"rules": {
		"no-underscore-dangle": "off",
	}
}
```
- sass  설치 (next.js가 Sass 지원)
```
npm i sass
```
- font폴더 내에 next.config.js 생성
```
const path = require('path');
module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'scss')],
	},
};
```

- front 폴더 내 pages폴더 생성 -> _app.js, index.js 생성

`_app.js`
```
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';

import '../scss/styles.scss';

const App = ({ Component }) => {
	return (
		<>
			<Head>
				<title>Goldensurfer Admin</title>
			</Head>
			<header>
				<p>header area</p>
			</header>
			<div className='container'>
				<Component />
			</div>

			<footer>
				<p>footer area</p>
			</footer>
		</>
	);
};

App.prototype = {
	Component: PropTypes.elementType.isRequired,
};

export default App;

```

`index.js`
```
import React from 'react';

const Home = () => {
	return (
		<div>
			<h1>main</h1>
		</div>
	);
};

export default Home;
```

- 명령어 `next` 를 쓰기위해 `next` 글로벌서치

```
npm i -g next
```

- `package.json` scripts 부분 수정하여 next 로 개발드 설정

```
"scripts": {
	"dev": "next",
	"build": "next build",
	"start": "next start"
},
```

- 개발모드 시작

```
npm run dev
```

<br /><br /><br />

# 코드 엄격하게 사용할려면...

```
npm i -D babel-eslint
```

- `.eslintrc` 내 추가
  - `"parser": "babel-eslint"`
  - `"env": { "es6": true }`

```
{
	"parser": "babel-eslint", -> 추가
	"parserOptions":
	...
	"env": {
		"browser": true,
		"node": true,
		"es6": true -> 추가
	},
}
```

<br /><br /><br />

# Google Devtools

- redux-devtools-extension

```
npm i redux-devtools-extension
```

<br /><br /><br />

<!--

### **2. Back Setting**

- back 폴더 내 `npm init` 으로 `package.json` 생성

- 필요한 packge 설치
  - bcrypt : 비밀번호 암호화 하는데 사용
  - cookie-parser : 로그인할 때 쿠키랑 세션 사용하는데 사용
  - express-session : 로그인 했을 때 쿠키랑 함께 정보 저장시 사용
  - dotenv : 비밀번호 관리를 위한
  - cors : 서버랑 프론트랑 주소가 다를 때 제약을 풀어주는
  - helmet / hpp : 보안
  - morgan : 서버에 로그 남겨주는
  - multer : 이미지 업로드 사용시
  - passport / passport-local : 로그인관리 (로그인 쉽게 할 수 있게 처리해주는)
  - sequelize / sequelize-cli : ORM(object-relational mapping) -> SQL문이랑 자바스크립트 연결해주는 것 (자바스크립트코드로 db를 조작 가능)

```
npm i express axios bcrypt cookie-parser express-session dotenv cors helmet hpp morgan multer passport passport-local sequelize sequelize-cli
```

- 추가 글로벌 설치(글로벌 설치는 한번만 하면 다음 부터 안해도 된다.)

```
npm i -g sequelize-cli
```

- 작업시에만 필요한 파일 설치
  - nodemon : 서버변경 감지하여 서버 껐다 켰다 해줌

```
npm i -D eslint eslint-config-airbnb eslint-plugin-jsx-a11y nodemon
```

> 프론트와 백앤드간의 통식 규약을
> `REST API`, `GraphQL`을 많이 사용한다.

- `REST API`규칙을 지키기기 너무 힘들어 `HTTP API`로 타협을 본다.

  - GET : 가져오다
    - 페이지를 로딩하는것도 get이다
  - POST : 생성하다
  - PUT : 수정하다
  - PATCH : 일부만 수정하다
  - DELETE : 삭제하다

- 터미널에 `sequelize init` 을 친다 : init을 하면 필요한 파일을 알아서 설치한다.

  - `config/config.json` 파일 내 수정 password, database 수정
  - `models/index.js` 수정

  ```
  const Sequelize = require('sequelize');
  const env = process.env.NODE_ENV || 'development';
  const config = require('../config/config.json')[env];
  const db = {};

  const sequelize = new Sequelize(config.database, config.username, config.password, config);

  Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
  	db[modelName].associate(db);
  }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  module.exports = db;
  ```

- mysql 프로그램 설치해야함.

- mysql2 설치

```
npm i mysql2
```
-->
