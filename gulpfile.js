const gulp = require('gulp');
const { src, dest } = require('gulp');
const leSs = require('gulp-less');
const minifyCSS = require('gulp-csso');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');


function css() {
    return src('less/**/*.less')
      .pipe(leSs())
      .pipe(minifyCSS())
      .pipe(dest('css'))
      .pipe(browserSync.stream())
}

function imgMin(){
    return src('images/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
}

function watch(){
  browserSync.init({
    server: {
      baseDir: './',
    }
  });
  gulp.watch('./less/**/*.less', css);
  gulp.watch('./*.html').on('change', browserSync.reload)
}

exports.css = css;
exports.watch = watch;
exports.imgMin = imgMin;