const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const maps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch')

function sassCompiler(){
    return gulp.src('./src/style/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}
function imgCompress(){
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}
function jsCompress(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

exports.default = gulp.parallel(sassCompiler, imgCompress, jsCompress);

exports.watch = function(){
    gulp.watch('./src/style/*.scss'), {ignoreInitial: false}, gulp.series(sassCompiler);
    //gulp.watch('./src/scripts/main.js'), {ignoreInitial: false}, gulp.series(jsCompress);
    gulp.watch('./src/images/*'), {ignoreInitial: false}, gulp.series(imgCompress);
}