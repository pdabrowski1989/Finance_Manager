var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("es6", function () {
    return gulp.src("app/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("index.js"))
        .pipe(gulp.dest("www/js/"));
});