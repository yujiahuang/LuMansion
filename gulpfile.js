var gulp = require('gulp')
  , connect = require('gulp-connect')
  , concat = require('gulp-concat')
  , sass = require('gulp-ruby-sass');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('public/js/**/*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function() {
	gulp.src('app/scss/*.scss')
		.pipe(sass({sourcemap: true, sourcemapPath: 'app/scss'}))
		.on('error', function (err) { console.log(err.message); })
		.pipe(gulp.dest('public/css/'));
});

gulp.task('css', function() {
  gulp.src('public/css/*.css')
    .pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src('public/js/**/*.js')
    .pipe(connect.reload());
});

gulp.task('jade', function() {
	gulp.src('views/**/*.jade')
    .pipe(livereload());
});

gulp.task('watch', function () {
  gulp.watch(['public/js/**/*.html'], ['html']);
  gulp.watch(['app/scss/*.scss'], ['sass']);
  gulp.watch(['public/css/*.css'], ['css']);
  gulp.watch(['public/js/**/*.js'], ['js']);
  gulp.watch(['views/**/*.jade'], ['jade']);
});

gulp.task('develop', function () {

	// not a good way but gulp-nodemon sucks xD
	var nodemon = require('nodemon');
	nodemon({
	  script: 'develop.js',
	  ext: 'js json',
	  ignore: ['public/*']
	});

	nodemon.on('start', function () {
	  console.log('App has started');
	}).on('quit', function () {
	  console.log('App has quit');
	}).on('restart', function (files) {
	  console.log('App restarted due to: ', files);
	});

})

gulp.task('default', ['develop', 'connect', 'watch']);


