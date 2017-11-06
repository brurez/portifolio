const gulp = require('gulp');
const image = require('gulp-image');

gulp.task('default', () =>
  gulp.src('public/images/orig/*')
    .pipe(image())
    .pipe(gulp.dest('public/images'))
);