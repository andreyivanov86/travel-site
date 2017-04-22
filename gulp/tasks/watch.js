
var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
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
	// watch for changes in .js files
	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	})
}); 
//handles the browser automatic refresh 
gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
})