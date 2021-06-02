---
layout: post
title:  airbnb rules
date:   2021-06-02 09:31:01 +0900
categories: programming
tag: [React]
---


`package.json` 내 airbnb rules 설정

```
{
	"eslintConfig": {
		"extends": [
			"react-app",
			"react-app/jest",
			"airbnb",
			"airbnb/hooks",
			"prettier"
		],
		"rules": {
            "react/jsx-filename-extension": [ 1,{"extensions": [".js",".jsx"]}],                //-> 확장자로 js와 jsx 둘다 허용하도록 수정
            "react/react-in-jsx-scope": "off",                                                  //-> Prevent missing React when using JSX (JSX를 사용할 때 반응 누락 방지) 규칙 : 해제
            "react/self-closing-comp": ["error",{"component": true,"html": false}],             //-> 하위 요소가없는 구성 요소에 대한 추가 닫기 태그 방지 규칙 : html만 해제
            "react/prop-types": "off",                                                          //-> props의 타입체크 규칙 : 해제
            "react-hooks/exhaustive-deps": [ "off" ],                                           //-> hooks의 의존성배열이 충분하지 않을때 강제로 의존성을 추가하는 규칙 : off
            "react/no-this-in-sfc": "warn",                                                     //-> 상태 비저장 기능 구성 요소는 'this'를 사용하면 안되는 규칙 : 경고
            "react/jsx-props-no-spreading": [ "off" ],                                          //-> props spreading을 허용하지 않는 규칙 해제
            
            "import/no-unresolved": "off",                                                      //-> 모듈 경로 확인 할수 없는 규칙 : 해제 (jsconfig때문에 발생하는거라 해제시킴)
            "import/prefer-default-export" : "warn",                                            //-> default export 선호하는 규칙 : 경고
            "import/no-extraneous-dependencies": ["error",{"devDependencies": true}]            //-> dependencies
            
            "no-unused-vars": "warn",                                                           //-> 사용하지 않는 변수가 있을 때 빌드 에러가 나던 규칙 : 경고
            "no-console": "warn",                                                               //-> 콘솔을 쓰면 에러가 나던 규칙 : 경고
            "arrow-body-style": 0,                                                              //-> 화살표 기능 본문에 중괄호 필요 규칙 : 해제
            "spaced-comment":"off"                                                              //-> "//" 뒤에 예외 블록, 공간 또는 탭이 필요 규칙 : 해제
            "no-new": "warn",                                                                   //-> new 사용금지 규칙 : 경고
            "no-param-reassign": "warn",                                                        //-> 매개 변수로 선언된 변수에 재할당 금지규칙 : 경고
            "prefer-destructuring": [ "error",{"object": true,"array": false}],                 //-> Array 파괴 규칙?????? 모르겠지만 일부만 해제
            "no-underscore-dangle": "off",                                                      //-> underscore 사용 못하도록 하는 규칙 : 해제
            "no-shadow": "warn",                                                                //-> 
			"jsx-a11y/no-static-element-interactions": [ "off" ]                                //->
		}
	},
}


```
