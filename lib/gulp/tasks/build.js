/**
 * Created by tigra on 15.05.16.
 */
'use strict';

var gulp = require('gulp');
var del = require('del');
var config = require('../config').build;

gulp.task('build', ['clear'], function() {
    gulp.start('bundle');
});

gulp.task('clear', function() {
    return del(config.dest);
});

gulp.task('bundle', ['vendor', 'img', 'html', 'browserify', 'sass']);

