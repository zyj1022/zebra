/**
 * @file gulp
 * @author kingzhi
 */

var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

gulp.task('movejs', function() {
	return gulp.src('./src/js/zebra.js')
		.pipe(concat('zebra.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/'))
		.pipe(notify('MoveJS Task Complete :)'));
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: './src/'
		}
	});
});

gulp.task('watch', ['browserSync'], function() {
	gulp.watch('./src/js/zebra.js', ['movejs']);
	gulp.watch('./src/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);

gulp.task('build', function() {
	runSequence('movejs');
});
