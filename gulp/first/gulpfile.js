const {
    src,
    dest,
    series
} = require('gulp');

const uglify = require('gulp-uglify');
const $ = require('gulp-load-plugins')();


exports.minifyJS = function() {
    return src('./src/**/*.js')
        .pipe($.uglify())
        .pipe(dest('./dist'));
}

exports.copy = function() {
    return src('./src/**/*.js')
        .pipe(dest('./dist'));
}