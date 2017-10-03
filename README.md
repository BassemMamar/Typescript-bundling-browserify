# Typescript-bundling-browserify 
using [browserify](https://www.npmjs.com/package/browserify), [watchify](https://www.npmjs.com/package/watchify)
, [tsify](https://www.npmjs.com/package/tsify) to compile and bundle `es6`,`typescript` into one `js` file. 

## Pre-Requisites
Install [Node.js](http://nodejs.org)

Install these NPM packages globally:

`npm install -g  gulp typescript`

## Installing Packages
- Open terminal
- Type `npm install`

## Running

Type `gulp serve-dev` to compile `ts` files and watch any changes to re-compile

Type `gulp serve-build` to compile `ts` files into one `lib.js` file in the `dest` folder


# References
* [fast browserify builds with watchify](https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md)
* [Browserify + Uglify2 with sourcemaps](https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md)
* [gulp handbook](https://www.typescriptlang.org/docs/handbook/gulp.html)
* [tsconfig json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
* [Integrating with Build Tools](https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html)
 