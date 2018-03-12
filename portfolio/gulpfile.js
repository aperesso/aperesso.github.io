/*
**	GULPFILE : compile SCSS and watch it during our workflow
**	----> run gulp in your terminal to get the logs
*/

'use strict';

//		Dependencies
var gulp = require('gulp'); // x
var sass = require('gulp-sass'); // x
var minifyCSS = require('gulp-clean-css'); // x
var uglify = require('gulp-uglify'); // x
var rename = require('gulp-rename'); // x
var changed = require('gulp-changed'); // x

//		SCSS to CSS
var SCSS_SRC = './src/stylesheets/scss/**/*.scss';
var SCSS_DEST = './src/stylesheets/css';

//		Compile SCSS
gulp.task('compile.scss', function() {
	gulp.src(SCSS_SRC)
		.pipe(sass()).on('error', sass.logError)
		.pipe(minifyCSS())
		.pipe(rename({suffix: '.min'}))
		.pipe(changed(SCSS_DEST))
		.pipe(gulp.dest(SCSS_DEST));
});

//		Watch errors during compilation
gulp.task('watch.scss', function() {
	gulp.watch(SCSS_SRC, ['compile.scss']);
})

//		default-task -- callback
gulp.task('default', ['watch.scss']);
