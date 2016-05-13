/**
 * Created by tigra on 13.05.16.
 */
'use strict';

/**
 * Task "browserify"
 *      - dependency resolution defined by "require" method
 *      - translate from JSX
 *      - bundle to the "public/js/app.js"
 */


gulp.task('browserify', function() {
    var options = {
        debug: true
    };

    return browserify('./src/js/app.js', options)
        .transform('babelify', {presets: [ 'react' ]})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public'));

});
