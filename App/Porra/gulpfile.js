var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    watch       = require('gulp-watch'),
    liveReload  = require('gulp-livereload'),
    concat      = require('gulp-concat'),
    ngAnnotate  = require('gulp-ng-annotate'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    moment      = require('moment'),
    notify      = require('gulp-notify');

require('gulp-help')(gulp, {
    description: 'Ayuda'
});

gulp.task('compress', 'Concatena y uglyfica todos los javascripts de AngularJS en app.min.js.', function() {
    gulp.src(['website/angularjs/*.js'])
        .pipe(concat('app'))
        //.pipe(ngAnnotate())
        //.pipe(jshint())
        //.pipe(uglify())
        .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(rename({
            extname: ".min.js"
        }))
        .pipe(gulp.dest('public/dist'))
        //.pipe(notify('Uglified JavaScript (' + moment().format('MMM Do h:mm:ss A') + ')'))
       /* .pipe(liveReload({
            auto: false
        }));*/
});

gulp.task('stream', 'Escucha cambios en controladores y librerias', function() {

    gulp.watch("website/**/*.js", ['compress']);

});

gulp.task('default', ['stream']);
