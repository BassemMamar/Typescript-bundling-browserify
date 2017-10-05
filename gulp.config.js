function config() {
    var mainTsEntryFilePath = "./app/main.ts";
    var client = './app/';
    var temp = './.tmp/';
    var dest = './dest/';
    var outputFileName = 'lib.js';
    var tsconfig = "./tsconfig.json";
    var browserifyOptions = {
        entries: [mainTsEntryFilePath],
        debug: true,
        cache: {},
        packageCache: {}
    };

    var config = {
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