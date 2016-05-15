/**
 * Created by tigra on 15.05.16.
 */
'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
    gulp.watch('src/js/**/*.js', ['browserify']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/index.html', ['html']);
});
