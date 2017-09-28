(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper = (function () {
    function helper() {
    }
    helper.sum = function (a, b) {
        var deferred = $.Deferred();
        setTimeout(function () {
            $('#container').html('Good Morning...');
        }, 1000);
        return a + b + 11;
    };
    helper.prototype.promiseFunc = function () {
        return null;
    };
    return helper;
}());
exports.helper = helper;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("./helper/helper");
var main = (function () {
    function main(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    main.prototype.getSum = function () {
        console.log('getSum Func');
        var result = helper_1.helper.sum(this.firstNumber, this.secondNumber);
        return result;
    };
    return main;
}());
exports.main = main;
var test = new main(1, 2);
console.log('test.getSum()');
console.log(test.getSum());
},{"./helper/helper":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvaGVscGVyL2hlbHBlci50cyIsImFwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTtJQUVJO0lBRUEsQ0FBQztJQUVNLFVBQUcsR0FBVixVQUFXLENBQVMsRUFBRSxDQUFTO1FBQzNCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQVEsQ0FBQztRQUVsQyxVQUFVLENBQUM7WUFDUCxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw0QkFBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsYUFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFHUSx3QkFBTTs7OztBQ3RCZiwwQ0FBeUM7QUFHekM7SUFDSSxjQUFtQixXQUFtQixFQUFTLFlBQW9CO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQVE7SUFFbkUsQ0FBQztJQUVELHFCQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTNCLElBQUksTUFBTSxHQUFHLGVBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUwsV0FBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksb0JBQUk7QUFjakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxuY2xhc3MgaGVscGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHN1bShhOiBudW1iZXIsIGI6IG51bWJlcikge1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8dm9pZD4oKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJyNjb250YWluZXInKS5odG1sKCdHb29kIE1vcm5pbmcuLi4nKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gYSArIGIgKyAxMTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9taXNlRnVuYygpOiBKUXVlcnlQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGhlbHBlciB9ICIsImltcG9ydCB7IGhlbHBlciB9IGZyb20gXCIuL2hlbHBlci9oZWxwZXJcIjtcclxuLy8vLy88cmVmZXJlbmNlIHBhdGg9XCJoZWxwZXIvaGVscGVyLnRzXCIgLz5cclxuXHJcbmV4cG9ydCBjbGFzcyBtYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXJzdE51bWJlcjogbnVtYmVyLCBwdWJsaWMgc2Vjb25kTnVtYmVyOiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3VtKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRTdW0gRnVuYycpO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gaGVscGVyLnN1bSh0aGlzLmZpcnN0TnVtYmVyLCB0aGlzLnNlY29uZE51bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbnZhciB0ZXN0ID0gbmV3IG1haW4oMSwgMik7XHJcbmNvbnNvbGUubG9nKCd0ZXN0LmdldFN1bSgpJyk7XHJcbmNvbnNvbGUubG9nKHRlc3QuZ2V0U3VtKCkpO1xyXG4iXX0=
