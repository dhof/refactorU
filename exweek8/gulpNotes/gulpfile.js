var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var tinyCSS = require('gulp-minify-css');

// **/* goes through all sub folders within src/
gulp.task('styles', function() {
	gulp.src(['css/src/**/*.css'])
		.pipe(concat('styles.css'))
		.pipe(tinyCSS())
		.pipe(gulp.dest('css/dist'))
});

gulp.task('scripts', function() {
	gulp.src(['js/src/**/*.js'])
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js/dist'))
});

gulp.task('default', function() {
	
	gulp.watch('css/src/**/*.css', ['styles'])
	gulp.watch('js/src/**/*.js', ['scripts'])
});

