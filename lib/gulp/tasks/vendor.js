/**
 * @copyright Iterios
 * @author Nick Burdo <n.burdo@iterios.com>
 * @version 1.0.0  12.05.2016
 * @since 1.0.0
 */

/**
 * Task "vendor" - concat vendor plugins from "node_modules" to the public "vendor.js" & "vendor.css"
 */

var gulp  = require('gulp');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var file = require('gulp-file');
var config = require('../config').vendor;


gulp.task('vendor', ['vendor-js', 'vendor-css']);


gulp.task('vendor-data', function (cb) {
    config.srcJs = [];
    config.srcCss = [];

    config.plugins.map(function(elem) {
        var fileName;
        var opt = config.options[elem];
        if (!opt) {
            opt = {
                package: 'node_modules',
                js: {
                    path: 'dist',
                    name: elem,
                    noMin: false
                }
            };
        }
        if (opt.js) {
            opt.package = opt.package || 'node_modules';
            opt.js.path = opt.js.path || 'dist';
            opt.js.name = opt.js.name || elem;
            opt.js.noMin = opt.js.noMin || false;
            fileName = opt.package + '/' + elem + '/' + opt.js.path + '/' + opt.js.name + (opt.js.noMin ? '' : '.min') + '.js';
            config.srcJs.push(fileName);
        }
        if (opt.css) {
            opt.package = opt.package || 'node_modules';
            opt.css.path = opt.css.path || 'dist/css';
            opt.css.name = opt.css.name || elem;
            opt.css.noMin = opt.css.noMin || false;
            fileName = opt.package + '/' + elem + '/' + opt.css.path + '/' + opt.css.name + (opt.css.noMin ? '' : '.min') + '.css';
            config.srcCss.push(fileName);
        }
        if (opt.additional) {
            opt.additional.map(function (item) {
                fileName = opt.package + '/' + elem + '/' + item.path + '/' + item.name + (item.noMin ? '' : '.min') + '.js';
               config.srcJs.push(fileName);
            });
        }
        if (opt.assets) {
            opt.assets.map(function (item) {
                fileName = opt.package + '/' +elem + '/' + item + '/**';

                gulp.src(fileName, {base: (opt.package + '/' + elem)})
                    .pipe(gulp.dest(config.dest));
            });
        }
    });

    cb();
 });

gulp.task('vendor-js', ['vendor-data'], function () {
    if (config.srcJs.length) {
        return gulp.src(config.srcJs)
            .pipe(concat('js/vendor.js'))
            .pipe(gulp.dest(config.dest));
    } else {
        return file('js/vendor.js', '', {src: true})
            .pipe(gulp.dest(config.dest));
    }
});

gulp.task('vendor-css', ['vendor-data'], function () {
    if (config.srcCss.length) {
        return gulp.src(config.srcCss)
            .pipe(concat('css/vendor.css'))
            .pipe(csso())
            .pipe(gulp.dest(config.dest));
    } else {
        return file('css/vendor.css', '', {src: true})
            .pipe(gulp.dest(config.dest));
    }
});
