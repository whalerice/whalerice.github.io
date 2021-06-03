---
title: input number 한 자리씩 입력되도록 만들어보자
layout: post
date:   2021-06-03 22:10:01 +0900
categories:
- programming
tag: AngularJS
---

## input number 입력시 한자리씩 입력되도록 적용

```
var app = angular.module('app', []);
var InuptController = app.controller('InuptController', ['$scope', function ($scope)
{
	var Inupt = this;
	
	Inupt.error = false;
	
	Inupt.keyup = function(e)
	{
		var regexp = e.key.replace(/[^0-9.]/g, '');
		var prev = e.target.previousElementSibling;
		var next = e.target.nextElementSibling;
		
		if (e.key === 'Unidentified')
			regexp = target.value;
		
		if(e.target.value.length > 1)
		{
			e.target.value = e.target.value.slice(0,1);
		}
		
		if(regexp === ''){
			
			if(e.keyCode === 8)
			{
			   if(!prev)
					return;
				prev.focus();
			}
			else if(e.keyCode === 37)
			{
			   if(!prev)
					return;
				prev.focus();
			}
			else if(e.keyCode === 39)
			{
			  if(!next)
				return;
			
				next.focus();
			}
			else
			{
				e.target.value = '';
			}
		}
		else{
			console.log(regexp);
			if(!next)
				return;
			
			next.focus();
		}
	}
}]);

```

{% include codepen.html hash="RwNzwrZ" title="input number" %}
