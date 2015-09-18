"use strict";

var gulp = require('gulp');
var duration = require('gulp-duration');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var glob = require('glob');

// file and dir path of browserify
var path = {
  OUT: 'build.js',
  DEST_BUILD: 'dist/build',
  ENTRY_POINT: glob.sync('./src/*.jsx')
};

// options of browserify
var props = {
  entries: path.ENTRY_POINT,
  transform: [reactify],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true,
}

var bundler = watchify(browserify(props));

bundler.on('update', compile); // execute if there are some changes

gulp.task('watchify', compile);
gulp.task('default', ['watchify']);

function compile(){
  return bundler.bundle() // bundle entried files
  // log errors if they happen
  .on('error', function(err) {
    console.log(gutil.colors.red("Oops! you have ERROR! \n" + err.message));
    this.emit('end');
  })
  // //Pass desired output filename to vinyl-source-stream
  .pipe(source(path.OUT))
  // show duration time and filename
  .pipe(duration( 'compiled "' + path.OUT + '"' ))
  // output directory
  .pipe(gulp.dest(path.DEST_BUILD));
}


