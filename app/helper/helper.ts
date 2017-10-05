
var fs = require("fs");
const src = fs.readFileSync('app/home.html', 'utf8');

class helper {

    constructor() {
    }

    static sum(a: number, b: number) {
        var deferred = $.Deferred<void>();

        setTimeout(function () {
            $('#container').html(src);
        }, 1000);
        return a + b;
    }

    promiseFunc(): JQueryPromise<boolean> {
        return null;
    }
}


export { helper } 