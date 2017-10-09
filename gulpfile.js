"use strict";
var gulp = require("gulp");
var del = require("del");
var webserver = require('gulp-webserver')
var inject = require('gulp-inject');

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
    .plugin("tsify", { project: config.tsconfig })
    .transform('brfs', { sourceMaps: false });

gulp.task('index-inject', ['serve-tsc'], function (func) {
    var sources = gulp.src(['./.tmp/lib.js'], { read: false });

    return gulp.src('./index.html')
        .pipe(inject(sources))
        .pipe(gulp.dest('.'));
});

gulp.task('serve-dev', ['index-inject'],function(func){
      gulp.src('.')
        .pipe(webserver({
            livereload: true,
            open: true,
        }));
});

gulp.task('serve-tsc', ['clean-dev-dir'], bundle);

gulp.task('clean-dev-dir', function (done) {
    clean(config.outputDivDirectory, done);
});
// gulp.watch(config.tsFiles, ['serve-tsc']);
var watchedBrowserify = undefined;
function bundle(func) {
    //browserifyObj.transform('brfs', { sourceMaps: false });
    if (typeof watchedBrowserify === 'undefined') {
        watchedBrowserify = watchify(browserifyObj);
        watchedBrowserify.on('update', bundle);
        watchedBrowserify.on('end', func);
        watchedBrowserify.on('log', gutil.log);
    }

    return watchedBrowserify
        //  return browserifyObj
        //.transform('brfs-babel')
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source(config.outputFileName))
        .pipe(gulp.dest(config.outputDivDirectory));
}


gulp.task('serve-build', ['build']);
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


var ts = require("gulp-typescript");
gulp.task("generate-declaration-file", ['clean-build-dir'], function () {
    var tsResult = gulp.src(config.tsFiles)
        .pipe(ts({
            declaration: true,
            noImplicitAny: true,
            module: 'amd',
            outFile: config.outputFileName
        }));
    //.pipe(tsProject());
    return tsResult.dts.pipe(gulp.dest(config.outputBuildDirectory));

    // return merge([tsResult.dts.pipe(gulp.dest("built")) ]);
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