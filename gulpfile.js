var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

//Default Taske for Gulp
gulp.task('default', function(){
	console.log("Gulp task created.");
});
// html task for gulp
gulp.task('html', function(){
	console.log("Imagine something useful done.");
});
//styles task 
gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
});
// watch task for gulp-watch triggered by html task
gulp.task('watch', function(){
	//watching saved changes in index.html file
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	//watchin saved in folder styles
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
}); 