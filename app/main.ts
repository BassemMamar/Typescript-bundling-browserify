import { helper } from "./helper/helper";

var fs = require("fs");
const src = fs.readFileSync('app/home.html', 'utf8');
const stl = fs.readFileSync('app/style.css', 'utf8');

export class main {
    constructor(public firstNumber: number, public secondNumber: number) {
        console.log('test ', src);
        console.log('style content', stl);
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
