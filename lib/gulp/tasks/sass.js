/**
 * Created by tigra on 14.05.16.
 */

var gulp = require('gulp');
var csso = require('gulp-csso');
var prefix   = require('gulp-autoprefixer');
var rename   = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

var config = require('../config').sass;


gulp.task('sass', function () {
    gulp.src(config.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(prefix(config.autoprefixer))
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest));
});