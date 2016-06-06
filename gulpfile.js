var gulp = require('gulp');

require('matchdep')
    .filterDev('gulp-*')
    .forEach(function(module) {
        global[module.replace(/^gulp-/, '')] = require(module);
    });

// To start server
gulp.task('server', function () {
    connect.server({
        root: 'app',
        port: 9001,
        livereload: true
    });
});

gulp.task('default', ['server']);
