!function e(r,t,n){function o(i,c){if(!t[i]){if(!r[i]){var f="function"==typeof require&&require;if(!c&&f)return f(i,!0);if(u)return u(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var l=t[i]={exports:{}};r[i][0].call(l.exports,function(e){var t=r[i][1][e];return o(t?t:e)},l,l.exports,e,r,t,n)}return t[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.sum=function(e,r){$.Deferred();return setTimeout(function(){$("#container").html("Good Morning...")},1e3),e+r+11},e.prototype.promiseFunc=function(){return null},e}();t.helper=n},{}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("./helper/helper"),o=function(){function e(e,r){this.firstNumber=e,this.secondNumber=r}return e.prototype.getSum=function(){console.log("getSum Func");var e=n.helper.sum(this.firstNumber,this.secondNumber);return e},e}();t.main=o;var u=new o(1,2);console.log("test.getSum()"),console.log(u.getSum())},{"./helper/helper":1}]},{},[2]);
//# sourceMappingURL=lib.js.map