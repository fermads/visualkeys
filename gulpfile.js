var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var package = require('./package.json');

gulp.task('default', function() {
  gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename(package.name +'-'+ package.version +'.min.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(rename('visualkeys.min.js'))
    .pipe(gulp.dest('dist/'));

  gulp.src('src/*.css')
    .pipe(minify({keepBreaks:true}))
    .pipe(rename(package.name +'-'+ package.version +'.min.css'))
    .pipe(gulp.dest('dist/'));
});
