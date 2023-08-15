const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function sassCompiler(){
    return gulp.src('./src/style/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build/styles'));
}
function imgCompress(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}
function jsCompress(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

exports.default = exports.default = gulp.parallel(sassCompiler, imgCompress, jsCompress);

exports.watch = function(){
    gulp.watch('./src/styles/main.scss', gulp.parallel(sassCompiler))
    gulp.watch('./src/scripts/*.js', gulp.parallel(jsCompress))
}
//gulp.parallel(sassCompiler, imgCompress, jsCompress);