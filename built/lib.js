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
        return a + b;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvaGVscGVyL2hlbHBlci50cyIsImFwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTtJQUVJO0lBRUEsQ0FBQztJQUVNLFVBQUcsR0FBVixVQUFXLENBQVMsRUFBRSxDQUFTO1FBQzNCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQVEsQ0FBQztRQUVsQyxVQUFVLENBQUM7WUFDUCxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELDRCQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQUdRLHdCQUFNOzs7O0FDdEJmLDBDQUF5QztBQUd6QztJQUNJLGNBQW1CLFdBQW1CLEVBQVMsWUFBb0I7UUFBaEQsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBUTtJQUVuRSxDQUFDO0lBRUQscUJBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0IsSUFBSSxNQUFNLEdBQUcsZUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTCxXQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxvQkFBSTtBQWNqQixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG5jbGFzcyBoZWxwZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3VtKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJC5EZWZlcnJlZDx2b2lkPigpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnI2NvbnRhaW5lcicpLmh0bWwoJ0dvb2QgTW9ybmluZy4uLicpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHJldHVybiBhICsgYjtcclxuICAgIH1cclxuXHJcbiAgICBwcm9taXNlRnVuYygpOiBKUXVlcnlQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGhlbHBlciB9ICIsImltcG9ydCB7IGhlbHBlciB9IGZyb20gXCIuL2hlbHBlci9oZWxwZXJcIjtcclxuLy8vLy88cmVmZXJlbmNlIHBhdGg9XCJoZWxwZXIvaGVscGVyLnRzXCIgLz5cclxuXHJcbmV4cG9ydCBjbGFzcyBtYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXJzdE51bWJlcjogbnVtYmVyLCBwdWJsaWMgc2Vjb25kTnVtYmVyOiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3VtKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRTdW0gRnVuYycpO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gaGVscGVyLnN1bSh0aGlzLmZpcnN0TnVtYmVyLCB0aGlzLnNlY29uZE51bWJlcik7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbnZhciB0ZXN0ID0gbmV3IG1haW4oMSwgMik7XHJcbmNvbnNvbGUubG9nKCd0ZXN0LmdldFN1bSgpJyk7XHJcbmNvbnNvbGUubG9nKHRlc3QuZ2V0U3VtKCkpO1xyXG4iXX0=
