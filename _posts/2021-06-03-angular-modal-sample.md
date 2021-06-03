---
title: AngularJS modal UI
layout: post
date:   2021-06-03 22:14:01 +0900
categories:
- programming
tag: AngularJS
---

html
```
<!DOCTYPE html>
<html lang="en" ng-app="app" >
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body ng-controller="PopupController as Popup">
	<button type="button" class="btn btn-primary" ng-click="Popup.Open('Modal1')">Modal Open</button>
	
	<!-- Modal1 -->
	<div class="modal" tabindex="-1" role="dialog" ng-if="Popup.IsModal === 'Modal1'">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<h5 class="modal-title">Modal title</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="Popup.Close()">
					<i class="material-icons notranslate">close</i>
				  </button>
			  </div>
			  <div class="modal-body">
				<p>Modal body text goes here.</p>
				<p>Modal body text goes here.</p>
				<p>Modal body text goes here.</p>
				<p>Modal body text goes here.</p>
				<p>Modal body text goes here.</p>
				<p>Modal body text goes here.</p>
			  </div>
			  <div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal" ng-click="Popup.Close()">Close</button>
				<button type="button" class="btn btn-primary">Changes</button>
			  </div>
		</div>
	</div>
	<div class="modal-backdrop" ng-click="Popup.Close()">
</div>
</body>
</html>
```

scss
```
*, 
*:before, 
*:after{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html, body{
	font-size: 100%;
	width: 100%;
	height: 100%;
}

body{
	font-family: 'Noto Sans', sans-serif;
	font-size: 14px;
	font-weight: 400;
	background-color: #202020;
}

.btn{
	padding: 10px 15px;
	border: 1px solid transparent;
	border-radius: 4px;
	font-size: 14px;
	cursor: pointer;
	&.btn-secondary{
		background-color: #d0d0d0;
		color: #333;
	}
	&.btn-primary{
		background-color: #0070ff;
		color: #fff;
	}
}

.modal{
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	
	.modal-dialog{
		z-index: 1050;
		.modal-content{
			min-width: 300px;
			max-height: 100vh;
			
		}
	}
}

.modal-header{
	background-color: #0070ff;
	height: 50px;
	position: relative;
	border-radius: 4px 4px 0 0;
	padding: 10px 15px;
	display: inline-flex;
    width: 100%;
    align-items: center;

	.close{
		border: 0;
		background-color: transparent;
		padding: 0;
		position: absolute;
		top: 0;
		right: 0;
		width: 44px;
		height: 100%;
		color: #fff;
		cursor: pointer;
	}
	.modal-title{
		line-height: 1.2;
		color: #fff;
		font-size: 16px;
	}
}
.modal-body{
	background-color: #fff;
	height: auto;
	max-height: calc(100vh - 110px);
	overflow: auto;
	padding: 15px;
}
.modal-footer{
	background-color: #fff;
	height: 60px;
	border-top: 1px solid #ccc;
	border-radius: 0 0 4px 4px;
	padding: 10px 15px;
	text-align: right;
}

.modal-backdrop{
	position: fixed;
	top:0;
	left: 0;
	right: 0;
	bottom: 0;
	display:block;
	background-color: rgba(0,0,0,.5);
	z-index: 1040;
}
```

JS
```
var app = angular.module('app', []);
var PopupController = app.controller('PopupController', ['$scope', function ($scope)
{
	var Popup = this;
	Popup.IsModal = null;
	
	Popup.Open = function(modalName){
		Popup.IsModal = modalName;
	}
	
	Popup.Close = function(){
		Popup.IsModal = null;
	}
}]);
```



{% include codepen.html hash="ZEYgaqg" title="input number" %}