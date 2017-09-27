"use strict";

var gulp = require("gulp");
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require("browserify");
var tsify = require("tsify");
var assign = require('lodash.assign');
var gutil = require('gulp-util');

var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');




var mainTsFilePath = "app/main.ts";
var libraryName = "lib";
var outputFileName = libraryName + ".js";
var outputFolder = "built/";
const tsConfig = require('./tsconfig.json');

// add custom browserify options here
var customOpts = {
    entries: [mainTsFilePath],
    debug: true
};
var opts = assign({}, watchify.args, customOpts);
var watchifyObj = watchify(browserify(opts));

// everything works just fine except one thing which is tsify gives an error /Cannot find name '$'/ 
// but the result for compiling is giving working library 
gulp.task('tsc', bundle); // so you can run `gulp js` to build the file
watchifyObj.on('update', bundle); // on any dep update, runs the bundler
watchifyObj.on('log', gutil.log); // output build logs to terminal

function bundle() {
    return watchifyObj
        .plugin("tsify", { project: "tsconfig.json" })
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source(outputFileName))
        .pipe(buffer())
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest(outputFolder));
}


gulp.task('temp', ['tsc']);

// var ts = require("gulp-typescript");
// gulp.task("tsc-gulp-typescript", function () {
//     return gulp.src('app/**/*.ts')
//         .pipe(ts({
//             sourceMap: true,
//             module: 'umd'
//         }))
//         .pipe(gulp.dest('app/'));
// });
