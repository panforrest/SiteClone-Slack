// This is a sample Gulp file for your reference
// Feel free to remove and implement your own build process instead

var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
var less = require('gulp-less')
var path = require('path')

gulp.task('get-started', function(){
    return gulp.src(
            [
                './assets/css/rollup-slack_kit_legacy_adapters.css',
                './assets/css/rollup-plastic.css',
                './assets/css/find_team.css',
                './assets/css/lato-2-compressed.css',
                './assets/css/sticky_nav.css',
                './assets/css/footer.css',
                './assets/css/_helpers.css'

            ]
        )
        .pipe(sourcemaps.init())
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gp_concat('get-started.min.css'))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('./dist/css/'))
})

gulp.task('css', function(){
    return gulp.src(
            [
                './assets/css/rollup-marketing.css',
                './assets/css/page_index.css',
            ]
        )
        .pipe(sourcemaps.init())
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gp_concat('style.min.css'))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('./dist/css/'))
})

gulp.task('style', ['css', 'get-started'], function(){})


gulp.task('js', function(){
    return gulp.src(
            [
                './assets/js/jquery.js',
                './assets/js/dropzone.js'
            ]
        )
        .pipe(sourcemaps.init())
        .pipe(gp_concat('gulp-concat.js'))
        .pipe(gulp.dest('./assets/min/'))
        .pipe(gp_uglify())
        .pipe(gp_rename('vendor.min.js'))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('./dist/js/'))
});

// custom app logic for your project:
gulp.task('app', function(){
    return gulp.src(
            [
                './assets/js/app.js'
            ]
        )
        .pipe(sourcemaps.init())
        .pipe(gp_uglify())
        .pipe(gp_rename('app.min.js'))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('./dist/app/'))
});

gulp.task('copy-images', function(){
    return gulp.src(
            ['./assets/images/**']
        )
        .pipe(gulp.dest('./dist/images/'))
})

// specify watch files here:
gulp.task('watch', function() {
    gulp.watch(['./assets/js/**.js', './assets/css/**', './assets/less/**', './assets/images/**'], ['prod'])
})

gulp.task('prod', ['style', 'copy-images', 'js', 'app'], function(){})
gulp.task('default', ['style', 'copy-images', 'js', 'app', 'watch'], function(){})



