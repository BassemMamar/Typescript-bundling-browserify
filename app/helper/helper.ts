
class helper {

    constructor() {

    }

    static sum(a: number, b: number) {
        var deferred = $.Deferred<void>();

        setTimeout(function () {
            $('#container').html('Good Morning...');
        }, 1000);
        return a + b + 11;
    }

    promiseFunc(): JQueryPromise<boolean> {
        return null;
    }
}


export { helper } 