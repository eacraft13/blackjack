var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var uglify       = require('gulp-uglify');



gulp.task('content', () => {
  gulp
  .src('./src/**/*.html')
  .pipe(gulp.dest('./dist/'));
});



gulp.task('scripts', () => {
  gulp
  .src('./src/**/*.js')
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/'));
});



gulp.task('styles', () => {
  gulp
  .src('./src/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest('./dist/'));
});



gulp.task('watch', function() {
  gulp.watch('./src/**/*.html', [ 'content' ]);

  gulp.watch('./src/**/*.js', [ 'scripts' ]);

  gulp.watch('./src/**/*.scss', [ 'styles' ]);
});



gulp.task('default', [ 'content', 'scripts', 'styles', 'watch' ]);
