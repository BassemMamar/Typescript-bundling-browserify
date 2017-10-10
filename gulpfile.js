"use strict";
var gulp = require("gulp");
var config = require("./gulp.config.js")();
var del = require("del");
var ts = require("gulp-typescript");
var inject = require('gulp-inject');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require("browserify");
var tsify = require("tsify");
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');

var watchedBrowserify = undefined;
var browserifyObj = browserify(config.browserifyOptions)
    .plugin("tsify", { project: config.tsconfig })
    .transform('brfs', { sourceMaps: false });

gulp.task('serve-dev', ['serve-tsc'], function (func) {
    var sources = gulp.src([config.temp + config.outputFileName], { read: false });

    // inject file in the html page
    gulp.src(config.html)
        .pipe(inject(sources))
        .pipe(gulp.dest(config.root));

    return gulp.src(config.root)
        .pipe(webserver({
            livereload: true,
            open: true,
        }));
});

gulp.task('serve-tsc', ['clean-dev-dir'], bundle);

gulp.task('clean-dev-dir', function (done) {
    clean(config.outputDivDirectory, done);
});

function bundle(func) {
    if (typeof watchedBrowserify === 'undefined') {
        watchedBrowserify = watchify(browserifyObj);
        watchedBrowserify.on('update', bundle);
        watchedBrowserify.on('end', func);
        watchedBrowserify.on('log', gutil.log);
    }

    return watchedBrowserify
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source(config.outputFileName))
        .pipe(gulp.dest(config.outputDivDirectory));
}

gulp.task('serve-build', ['build'], function () {
    var sources = gulp.src([config.outputBuildDirectory + config.outputFileName], { read: false });

    gulp.src(config.html)
        .pipe(inject(sources))
        .pipe(gulp.dest(config.root));

    return gulp.src(config.root)
        .pipe(webserver({
            livereload: true,
            open: true,
        }));
});

gulp.task("build", ['generate-declaration-file'], function () {
    return browserifyObj
        .bundle()
        .pipe(source(config.outputFileName))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.outputBuildDirectory));
});

gulp.task("generate-declaration-file", ['clean-build-dir'], function () {
    var tsResult = gulp.src(config.tsFiles)
        .pipe(ts({
            declaration: true,
            noImplicitAny: true,
            module: 'amd',
            outFile: config.outputFileName
        }));

    return tsResult.dts.pipe(gulp.dest(config.outputBuildDirectory));
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