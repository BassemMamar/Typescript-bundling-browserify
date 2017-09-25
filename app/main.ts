import { helper } from "./helper/helper";
/////<reference path="helper/helper.ts" />

export class main {
    constructor(public firstNumber: number, public secondNumber: number) {

    }

    getSum() {
        console.log('getSum Func');

        let result = helper.sum(this.firstNumber, this.secondNumber);
        return result;
    }

}

var test = new main(1, 2);
console.log('test.getSum()');
console.log(test.getSum());
