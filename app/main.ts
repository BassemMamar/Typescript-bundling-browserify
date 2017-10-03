import { helper } from "./helper/helper";

export class main {
    constructor(public firstNumber: number, public secondNumber: number) {
    }

    getSum() {
        console.log('getSum Func');

        let result = helper.sum(this.firstNumber, this.secondNumber);
        return result;
    }

}

var test = new main(5, 15);
console.log('Hi there...');
console.log(test.getSum());
