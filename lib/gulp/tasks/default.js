/**
 * Created by tigra on 13.05.16.
 */

/**
 * Task "default"
 */

var gulp = require('gulp');

// Запускаем пустой таск `default`, но предварительно исполняем таск `watch`
//gulp.task('default', ['watch']);
gulp.task('default', ['build', 'watch']);
