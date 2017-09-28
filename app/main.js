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
//# sourceMappingURL=main.js.map