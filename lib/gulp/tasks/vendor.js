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
var browserify = require('browserify');
var concat = require('gulp-concat-multi');
var del = require('del');
var config = require('../config').vendor;


gulp.task('del-vendor', function () {
    return del(['public/css/vendor.css', 'public/js/vendor.js']);
});

gulp.task('vendor', ['del-vendor'], function () {
    var vendorEx = [];
    var vendorCss = [];
    var vendorJs = config.plugins.map(function(elem) {
        var src;
        var opt = config.options[elem];
        if (!opt) {
            opt = {
                path: 'dist',
                name: elem,
                min: true
            };
        } else {
            if (!opt.path) opt.path = 'dist';
            if (!opt.name) opt.name = elem;
            if (!opt.min) opt.min = true;
        }
        if (opt.css) {
            opt.cssName = opt.cssName || elem;
            opt.cssNoMin = opt.cssNoMin || opt.noMin || false;
            src = 'node_modules/' + elem + '/' + opt.css + '/' + opt.cssName;
            if (!opt.cssNoMin) {
                src += '.min'
            }
            src += '.css';
            vendorCss.push(src);
        }
        if (opt.extend) {
            opt.extend.map(function (item) {
                src = 'node_modules/' + elem + '/' + item.path + '/' + item.name;
                if (!item.noMin) {
                    src += '.min'
                }
                src += '.js';
               vendorEx.push(src);
            });
        }
        src = 'node_modules/' + elem + '/' + opt.path + '/' + opt.name;
        if (!opt.noMin) {
            src += '.min'
        }
        src += '.js';

        return src;
    });
    vendorEx.map(function (el) {
        vendorJs.push(el);
    });

    var options = {};

    if (vendorJs.length) {
        options['js/vendor.js'] = vendorJs;
    }
    if (vendorCss.length) {
        options['css/vendor.css'] = vendorCss;
    }

    return concat(options)
        .pipe(gulp.dest('public'));
});
