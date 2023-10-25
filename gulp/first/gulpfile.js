const {
    src,
    dest,
    series
} = require('gulp');

const fs = require('fs-extra');

const uglify = require('gulp-uglify');
const $ = require('gulp-load-plugins')();
const args = require('minimist')(process.argv.slice(2));
const {name} = args;
const path = `./src/js/${name}.js`;

function validFile(cb) {
    if (!fs.pathExistsSync(`src/js/${name}.js`)) {
        cb(new Error(`找不到${name}文件`));
        return;
    }
    cb();
}

function copy() {
    return src(path)
        .pipe(dest('./dist'));
}

exports.minifyJS = function() {
    return src(path)
        .pipe($.uglify())
        .pipe(dest('./dist'));
}

exports.copy = series(
    validFile,
    copy
)