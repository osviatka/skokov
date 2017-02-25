'use strict';

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    livereload   = require('gulp-livereload'),
    connect      = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnane      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    pug          = require('gulp-pug', 'pug'),
	include      = require("gulp-include");
	
// server connect
gulp.task('connect', function() {
  connect.server({
    root: ['app/', 'node_modules/', 'bower_components'],
    port: 1111,
    livereload: true
  });
});

//pug
gulp.task('pug', function() {
    return gulp
        .src('pug/*.pug')
        .pipe( pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/'))
        .pipe(connect.reload());
});

// html
gulp.task('html', function() {
  gulp.src('app/*.html')
    .pipe(connect.reload());
});
gulp.task('incHTML', function() {
  gulp.src('html/*.html')
  .pipe(include())
  .pipe(gulp.dest('app/'))
  .pipe(connect.reload());
});

// css
gulp.task('css', function () {
  gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
      cascade: false
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
});

// js
gulp.task('js', function() {
  gulp.src('app/js/*js')
    .pipe(connect.reload());
});

// watch
gulp.task('watch', function () {
    gulp.watch(['app/css/*css'], ['css']);
    gulp.watch(['scss/*scss'], ['css']);
    gulp.watch(['scss/*/*scss'], ['css']);
    gulp.watch(['app/js/*js'], ['js']);
    gulp.watch(['pug/*pug'], ['pug']);
	gulp.watch(['app/*html'], ['html']);
	gulp.watch(['html/*html'], ['incHTML']);
	gulp.watch(['html/*/*html'], ['incHTML']);
});

// default
gulp.task('default', [
    'connect',
    'html',
    'css',
    'js',
    //'pug',
    'watch',
	'incHTML'
]);

gulp.task('css-min', function(){
  return gulp.src('app/css/*.css')
  .pipe(cssnane())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/css/min-css'));
});