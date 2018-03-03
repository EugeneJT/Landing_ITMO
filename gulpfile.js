var gulp = require('gulp'); 
var browserSync = require('browser-sync').create();

//Задача умолчанию, перед которой выполнится задача ['webserver']:
gulp.task('default',['build', 'browser-sync'], function () {
    gulp.watch('dev/**/*', ['build']).on('change', browserSync.reload);
});
//Задача 'build':
gulp.task('build', function () {
    return gulp.src('site/**/*')
           .pipe(gulp.dest('../public'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "../public"
        }
    });
});