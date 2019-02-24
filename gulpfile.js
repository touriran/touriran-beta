var gulp = require('gulp'),
  jsmin = require('gulp-jsmin'),
  include = require('gulp-include');


// Scripts

gulp.task('scripts', function () {
  return gulp.src('source/x-assets/scripts/*.js')
    .pipe(include({
      extensions: 'js',
      hardFail: true,
      includePaths: [
        __dirname + '/node_modules'
      ]
    }))
    .pipe(jsmin())
    .pipe(gulp.dest('public/x-assets/scripts'));
});

//Default 

gulp.task('default', gulp.series(
  'scripts'
));