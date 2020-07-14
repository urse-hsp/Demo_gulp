var gulp = require('gulp');

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssminify = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('style', function(){
	return gulp.src('./style/**/*.scss')
		.pipe(sass())
		.pipe(concat('index.min.css'))
		.pipe(cssminify())
		.pipe(gulp.dest('./dest'))
})

gulp.task('style:dev', function(){
	return gulp.src('./style/**/*.scss')
		.pipe(sass())
		.pipe(sourcemaps.init())
		.pipe(concat('index.min.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dest'))
		.pipe(browserSync.stream());
})
// var through = require('through2');

// var bufferContents = function(file, enc, cb){
// 	var path = file.relative;
// 	var content = file.contents;
// 	if(path != "index.js"){
// 		var prepend = new Buffer('registJS.add("' + path.replace('\\','/') + '", function(){\n');
// 		var append = new Buffer('\n});')
// 		file.contents = Buffer.concat([prepend, content, append], prepend.length + content.length + append.length);
// 	}
// 	cb(null, file);
// }

// var endStream = function(cb){
// 	cb();
// }

// .pipe(through.obj(bufferContents, endStream))

var insert = require('gulp-insert');
var uglify = require('gulp-uglify');

gulp.task('script', function(){
	return gulp.src('./script/**/*.js')
		.pipe(insert.transform(function(contents, file){
			var path = file.relative;
			if(path != "index.js"){
				var prepend = 'registJS.add("' + path.replace("\\","/") + '", function(){\n';
			  	var append = '\n});';
			  	return prepend + contents + append;
			}
			return contents
		}))
		.pipe(concat('index.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dest'))
})

gulp.task('script:dev', function(){
	return gulp.src('./script/**/*.js')
		.pipe(insert.transform(function(contents, file){
			var path = file.relative;
			if(path != "index.js"){
				var prepend = 'registJS.add("' + path.replace("\\","/") + '", function(){\n';
			  	var append = '\n});';
			  	return prepend + contents + append;
			}
			return contents
		}))
		.pipe(sourcemaps.init())
		.pipe(concat('index.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dest'))
		.pipe(browserSync.stream());
})

var browserSync = require('browser-sync').create();

gulp.task('default:dev', ['script:dev', 'style:dev'], function(){
	browserSync.init({
		server:{
			baseDir:'./'
		},
		open:false
	});
	gulp.watch('./script/**/*.js', ['script:dev']);
	gulp.watch('./style/**/*.scss', ['style:dev']);
})