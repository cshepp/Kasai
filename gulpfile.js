
var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');
var runSequence = require('run-sequence');
var merge = require('merge2');

gulp.task('compile', function () {
	var tsResult = gulp.src('src/**/*.ts')
		.pipe(ts({
			module: "commonjs",
			declarationFiles: true
		}));

	return merge([
		tsResult.js.pipe(gulp.dest('target/')),
		tsResult.dts.pipe(gulp.dest('target/'))
	]);
});

gulp.task('clean', function (callback) {
	del(['target/**/*']).then(function(){
		callback();
	});
});

gulp.task('default', function (callback) {
	runSequence('compile', callback);
});
