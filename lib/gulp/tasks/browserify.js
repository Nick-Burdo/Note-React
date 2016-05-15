/**
 * Created by tigra on 13.05.16.
 */

/**
 * Task "browserify"
 *      - dependency resolution defined by "require" method
 *      - translate from JSX
 *      - bundle to the "public/js/app.js"
 */

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var config = require('../config').browserify;

gulp.task('browserify', function() {
    var options = {
        debug: true
    };

    return browserify(config.src, options)
        .transform('babelify', {presets: [ 'react' ]})
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(gulp.dest(config.dest));

});
