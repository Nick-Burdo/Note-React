/**
 * @copyright Iterios
 * @author Nick Burdo <n.burdo@iterios.com>
 * @version 1.0.0  12.05.2016
 * @since 1.0.0
 */

/**
 * Vendor plugins list for concate to the "public/js/vendor.js" & "public/css/vendor.css"
 * @type {string[]}
 */
var vendors = [
    'react',
    'react-dom',
    'select2',
    'moment'
];
/**
 * Vendor plugins "src" options
 *      path {=string} - path to JS file (without "node_modules")
 *      name {=string} - file name without ".min" & extention (if not equal to plugin name)
 *      noMin {=boolean} - TRUE if no need add ".min" to the file name
 *      css {=string} - path to CSS file (without "node_modules"). If set, file will be concate to the "vendor.css"
 *      cssName {=string} - CSS file name without ".min" & extention (if not equal to "name" option or plugin name)
 *      cssNoMin {=boolean} - analog "noMin" for plugin's CSS file
 *      extend {=Object[]} - Each extended plugin's JS file will be concat to the "vendor.js"
 * @type {Object}
 */
var vendorsOptions = {
    select2: {
        path: 'dist/js',
        css: 'dist/css',
        cssNoMin: true
    },
    moment: {
        path: 'min',
        extend: [
            {path: 'locale', name: 'ru', noMin: true}
        ]
    }
};

var gulp  = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat-multi');
var del = require('del');


/**
 * Task "vendor" - concat vendor plugins from "node_modules" to the public "vendor.js" & "vendor.css"
 */
gulp.task('del-vendor', function () {
    return del(['public/css/vendor.css', 'public/js/vendor.js']);
});

gulp.task('vendor', ['del-vendor'], function () {
    var vendorEx = [];
    var vendorCss = [];
    var vendorJs = vendors.map(function(elem) {
        var src;
        var opt = vendorsOptions[elem];
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


/**
 * Task "browserify"
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