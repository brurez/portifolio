const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
  gulp.src('public/images/orig/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/images'))
);