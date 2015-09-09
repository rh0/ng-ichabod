"use strict";angular.module("ichabodngApp",["ngResource","ngRoute","ngSanitize"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("ichabodngApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("ichabodngApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("ichabodngApp").directive("masthead",function(){return{restrict:"E",templateUrl:"/templates/masthead.html"}}),angular.module("ichabodngApp").directive("navbar",["menuGetter",function(a){return{restrict:"E",templateUrl:"/templates/navbar.html",scope:{},link:function(b,c){b.mainMenu=a.navigationMenu,b.subSelected=null,b.menuToggle=function(a){b.subSelected=a},b.menuHide=function(){b.subSelected=null}}}}]),angular.module("ichabodngApp").factory("menuGetter",function(){return{navigationMenu:[{title:"About",href:"#"},{title:"Resources",href:"#"},{title:"Issues",href:"#",submenu:[{title:"Emergencies",href:"#"},{title:"Hunger",href:"#"},{title:"Health",href:"#"}]},{title:"Solidarity",href:"#"},{title:"Core Programs",href:"#",submenu:[{title:"Food Fast",href:"#"},{title:"Global High School",href:"#"},{title:"Other CRS Programs",href:"#"}]}]}}),angular.module("ichabodngApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);