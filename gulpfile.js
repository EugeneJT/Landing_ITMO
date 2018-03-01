
var gulp = require('gulp'); 
var webserver = require('gulp-webserver');

//Задача умолчанию, перед которой выполнится задача ['webserver']:
gulp.task('default',['webserver'], function () {
    gulp.watch('dev/**/*', ['build']);
});

//Задача 'build':
gulp.task('build', function () {
    return gulp.src('dev/*.html')
           .pipe(gulp.dest('public'));
});

//Новая задача 'webserver', перед которой выполнится задача ['build']:
gulp.task('webserver', ['build'], function() {
    gulp.src('public')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});