import { helper } from "./helper/helper";

var fs = require("fs");
const src = fs.readFileSync('app/home.html', 'utf8');
const stl = fs.readFileSync('app/style.css', 'utf8');

export class main {
    divOut = '';
    hlpr: helper;
    constructor(public firstNumber: number, public secondNumber: number) {
        console.log('test ', src);
        console.log('style content', stl);
         this.start();
        this.hlpr = new helper();
    }

    getSum() {
        console.log('getSum Func');
        let result = helper.sum(this.firstNumber, this.secondNumber);
        return result;
    }


    sqrt(para: any): any {
        return new Promise(resolve => setTimeout(_ => resolve(para * para), 1000));
    }

    async   start() {
        console.log('start printing...');
        for (var i = 0; i < 3; i++) {
            var result = await this.sqrt(i);
            console.log('<h3> i :' + i + ' </h3>');
            for (var j = 0; j < result; j++) {
                console.log(`<h5>          // j: ${j} ...  sqrt(${j}): ${await this.sqrt(j)} <h5>`);
                console.log('');
            }
        }
    }

}

var test = new main(5, 15);
console.log('Hi there...');
console.log(test.getSum());
