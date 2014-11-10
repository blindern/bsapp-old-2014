var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate');

var js_files = [
  './bower_components/angular/angular.js',
  './bower_components/angular-route/angular-route.js',
  './bower_components/angular-touch/angular-touch.js',
  './bower_components/angular-resource/angular-resource.js',
  './bower_components/ionic/release/js/ionic.js',
  './bower_components/ionic/release/js/ionic-angular.js',
  './bower_components/moment/moment.js',
  './bower_components/moment/locale/nb.js',
  './src/js/**'
];

gulp.task('styles', function() {
    return gulp.src('src/scss/app.scss')
      .pipe(sass({ style: 'expanded' }))
      .pipe(gulp.dest('www'));
});

gulp.task('scripts', function() {
    return gulp.src(js_files)
      .pipe(concat('app.js'))
      //.pipe(ngAnnotate())
      //.pipe(uglify())
      .pipe(gulp.dest('www'));
})

gulp.task('watch', function() {
    gulp.watch('src/scss/**', ['styles']);
    gulp.watch(js_files, ['scripts']);
});

gulp.task('default', function() {
    gulp.start('styles', 'scripts');
});
