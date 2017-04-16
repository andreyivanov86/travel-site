var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();

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
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
});
// watch task for gulp-watch triggered by html task
gulp.task('watch', function(){
	//sets up automatic browser refresh on file save
	browserSync.init({
		notify: false,
		server: {          //points to the local server that runs the index.html
			baseDir: 'app'
		}
	});
	//watching saved ch anges in index.html file
	watch('./app/index.html', function(){
		browserSync.reload();
	});
	//watchin saved in folder styles
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});
}); 

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
})