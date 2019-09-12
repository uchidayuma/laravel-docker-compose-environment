// JSONファイルの読み込みに使用
var fs = require('fs');
// var ejs = require('gulp-ejs');
var sass = require('gulp-sass');
// gulp本体
var gulp = require('gulp');
// css圧縮
var cssmin = require('gulp-cssmin');
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename')
// エラーハンドリング
var plumber = require("gulp-plumber");
var notify = require('gulp-notify');
var del = require('del');

var gulpif = require('gulp-if');

var minimist = require('minimist');

// Sassをコンパイルするタスクの設定
gulp.task("css", function () {
  return gulp.src('./place-ilink/stylesheets/*.scss', { base: './place-ilink/stylesheets' })// コンパイル対象のSassファイル
    .pipe(sass()) // コンパイル実行
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(autoprefixer()) // ベンダープレフィックスの付与
    .pipe(cleanCSS()) // cssを圧縮
    .pipe(rename({ extname: '.min.css' })) // 名前を.min.cssにする
    .pipe(gulp.dest('./public/stylesheets')); // 出力

});
gulp.task("css2", function () {
  return gulp.src('./place-ilink/stylesheets/**/*.scss', { base: './place-ilink/stylesheets' })// コンパイル対象のSassファイル
    .pipe(sass()) // コンパイル実行
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(cleanCSS()) // cssを圧縮
    .pipe(rename({ extname: '.min.css' })) // 名前を.min.cssにする
    .pipe(autoprefixer()) // ベンダープレフィックスの付与
    .pipe(gulp.dest('./public/stylesheets')); // 出力
});

gulp.task("default", function () {
  // scssフォルダを監視し、変更があったらコンパイルする
  gulp.watch('./place-ilink/stylesheets/**/*.scss', gulp.series('css2'));
  gulp.watch('./place-ilink/stylesheets/*.scss', gulp.series('css'));
});

