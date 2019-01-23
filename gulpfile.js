var gulp = require('gulp'),
  jsmin = require('gulp-jsmin'),
  include = require('gulp-include');


// Scripts

gulp.task('scripts', function () {
  return gulp.src('source/scripts/*.js')
    .pipe(include({
      extensions: 'js',
      hardFail: true,
      includePaths: [
        __dirname + '/node_modules',
        __dirname + '/src/js'
      ]
    }))
    .pipe(jsmin())
    .pipe(gulp.dest('public/scripts'));
});

//Default 

gulp.task('default', gulp.series(
  'scripts'
));