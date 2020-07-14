var gulp = require("gulp");

// var concat = require('gulp-concat')
// var uglify = require('gulp-uglify')
// var rename = require('gulp-rename')

// 注册任务
gulp.task('任务名',function() {
    // 配置任务操作
})

// 注册合并压缩js的任务
// gulp.task('js', function() {
//     // return gulp.src('src/js/*.js')
//     return gulp.src('src/js/**/*.js') //找到目标原文件，将数据读取到gulp的内存中
//     .pipe(concat('build.js'))   // 临时合并文件
//     .pipe(gulp.dest('dist/js/'))
// })  


// 注册默认任务
// gulp.task('default', [])
gulp.task('default', function() {
    // 将你的默认的任务代码放在这
});