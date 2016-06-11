var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('assets/_scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('assets/_scss/**/*.scss',['styles']);
});