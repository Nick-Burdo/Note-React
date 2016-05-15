/**
 * Created by tigra on 15.05.16.
 */

var gulp = require('gulp');
var imageop = require('gulp-image-optimization');
var config = require('../config').img;

gulp.task('img', function() {
    gulp.src(config.src)
        .pipe(imageop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(config.dest))

});
