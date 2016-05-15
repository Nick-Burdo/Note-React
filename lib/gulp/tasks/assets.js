/**
 * Created by tigra on 13.05.16.
 */
'use strict';

/**
 * Task "assets"
 */

var gulp = require('gulp');
var del = require('del');
var config = require('../config').assets;

gulp.task('del-assets', function() {
    return del(config.del);
});
gulp.task('assets', ['del-assets'], function() {
    return gulp
        .src(config.src)
        .pipe(gulp.dest(config.dest));
});
