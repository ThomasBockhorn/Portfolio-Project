var gulp = require('gulp');
gulp.task('default',function(){
    console.log("Hello world");
});
gulp.task('styles', function(){
    gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
});