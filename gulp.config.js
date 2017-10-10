function config() {
    var mainTsEntryFilePath = "./app/main.ts";
    var client = './app/';
    var temp = './.tmp/';
    var root='.';
    var dest = './dest/';
    var html = './index.html';
    var outputFileName = 'lib.js';
    var tsconfig = "./tsconfig.json";
    var browserifyOptions = {
        entries: [mainTsEntryFilePath],
        debug: true,
        cache: {},
        packageCache: {}
    };

    var config = {
        temp:temp,
        root:root,
        html:html,
        mainTsEntryFilePath: mainTsEntryFilePath,
        outputDivDirectory: temp,
        outputBuildDirectory: dest,
        outputFileName: outputFileName,
        browserifyOptions: browserifyOptions,
        tsconfig: tsconfig,
        tsFiles: client + '**/*.ts'
    }
    return config;
}

module.exports = config;