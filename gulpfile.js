'use strict';

// var gulp = require('gulp');
// var sass = require('gulp-sass')(require('sass'));
// var concat = require('gulp-concat');
// sass.compiler = require('node-sass');
// gulp.task('sass', function () {
//     return gulp.src('./sass/**/*.scss')
//         .pipe(concat('custom.scss'))
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./dist/'));
// });
// gulp.task('sass:watch', function () {
//     gulp.watch('./sass/**/*.scss', ['sass']);
// });


const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('sass/main.scss')
        .pipe(sass())
        .pipe(dest('dist'))
}

function watchTask() {
    watch(['sass/main.scss'], buildStyles)
}

function buildStyles_sample() {
    return src('sass/mainstyle.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask_sample() {
    watch(['sass/mainstyle.scss'], buildStyles_sample)
}


exports.default = series(buildStyles_sample, watchTask_sample)
exports.default = series(buildStyles, watchTask)

