
var fs = require("fs");
const src = fs.readFileSync('app/home.html', 'utf8');

class helper {

    constructor() {
        this.delayedMessage("World", 4000).then(() => { console.log('done') });
        this.delayedMessage("Hello", 2000);
    }

    static sum(a: number, b: number) {
        var deferred = $.Deferred<void>();

        setTimeout(function () {
            $('#container').html(src);
            $('#container').append('Done with sync.');
        }, 1000);
        return a + b;
    }

    promiseFunc(): JQueryPromise<boolean> {
        return null;
    }

    sleep(duration: number) {
        return new Promise(function (resolve) {
            setTimeout(() => { resolve(0) }, duration);
        })
    }

    async  delayedMessage(message: string, delay: number) {
        let remainingTime = await this.sleep(delay);
        console.log(message, `( ${message} remaining time: ${remainingTime})`);
    }



}


export { helper } 