var gulp = require('gulp');
var modernizr = require('gulp-modernizr');

gulp.task('modernizr', function(){
	return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
	.pipe(modernizr({
		"options": [
			"SetClasses"
		]
	}))
	.pipe(gulp.dest('./app/temp/scripts/'));
});