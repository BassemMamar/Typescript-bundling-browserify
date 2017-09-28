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


var customOpts = {
    entries: [mainTsFilePath],
    debug: true
};
var opts = assign({}, watchify.args, customOpts);
var browserifyObj = browserify(opts).plugin("tsify", { project: "tsconfig.json" });


gulp.task('serve-dev', ['serve-tsc']);
gulp.task('serve-tsc', bundle);

function bundle() {
    var watchedBrowserify = watchify(browserifyObj);
    watchedBrowserify.on('update', bundle);
    watchedBrowserify.on('log', gutil.log);

    return watchedBrowserify
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source(outputFileName))
        .pipe(gulp.dest(outputFolder));
}


gulp.task('serve-build', ['build']);
gulp.task("build", function () {
    return browserifyObj
        .bundle()
        .pipe(source(outputFileName))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("dist/"));
});



// var ts = require("gulp-typescript");
// gulp.task("tsc-gulp-typescript", function () {
//     return gulp.src('app/**/*.ts')
//         .pipe(ts({
//             sourceMap: true,
//             module: 'umd'
//         }))
//         .pipe(gulp.dest('app/'));
// });
