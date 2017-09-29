"use strict";
var gulp = require("gulp");
var del = require("del");
var config = require("./gulp.config.js")();

var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require("browserify");
var tsify = require("tsify");
var gutil = require('gulp-util');

var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

var browserifyObj = browserify(config.browserifyOptions)
    .plugin("tsify", { project: config.tsconfig });


gulp.task('serve-dev', ['serve-tsc']);
gulp.task('serve-tsc', ['clean-dev-dir'], bundle);

gulp.task('clean-dev-dir', function (done) {
    clean(config.outputDivDirectory, done);
});

function bundle() {
    var watchedBrowserify = watchify(browserifyObj);
    watchedBrowserify.on('update', bundle);
    watchedBrowserify.on('log', gutil.log);

    return watchedBrowserify
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source(config.outputFileName))
        .pipe(gulp.dest(config.outputDivDirectory));
}


gulp.task('serve-build', ['build']);
gulp.task("build", ['clean-build-dir'], function () {
    return browserifyObj
        .bundle()
        .pipe(source(config.outputFileName))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.outputBuildDirectory));
});

gulp.task('clean-build-dir', function (done) {
    clean(config.outputBuildDirectory, done);
});


gulp.task('clean', function (done) {
    clean(
        [
            config.outputDivDirectory,
            config.outputBuildDirectory
        ], done);
});

/**
 * Delete all files in a given path
 * @param  {Array}   path - array of paths to delete
 * @param  {Function} done - callback when complete
 */
function clean(path, done) {
    log("Cleaning: " + gutil.colors.blue(path));
    del(path).then(() => done());
}

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
    if (typeof msg === "object") {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                gutil.log(gutil.colors.blue(msg[item]));
            }
        }
    } else {
        gutil.log(gutil.colors.blue(msg));
    }
}