var gulp = require('gulp'),
  jsmin = require('gulp-jsmin'),
  include = require('gulp-include');


// Scripts

gulp.task('scripts', function () {
  return gulp.src('themes/touriran/source/assets/_scripts/*.js')
    .pipe(include({
      extensions: 'js',
      hardFail: true,
      includePaths: [
        __dirname + '/node_modules'
      ]
    }))
    .pipe(jsmin())
    .pipe(gulp.dest('themes/touriran/source/assets/scripts'));
});

//Default 

gulp.task('default', gulp.series(
  'scripts'
));