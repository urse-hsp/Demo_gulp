

// 1.把src'下的文件，通过babel转换成兼容大多数浏览器的ES5代码
// 2.把src和11b下的文件，全部放在sources 目录下。作为源文件
// 3.压缩混淆选中的JS文件
// 4.把源文件，改为“.mini.js'移动到dist目录


// const gulp = require('gulp')
const { src, dest } = require('gulp')

// npm install --save-dev gulp-uglify gulp-rename
const uglify = require('gulp-uglify') // 压缩混淆
const rename = require('gulp-rename') // 更改名字

// npm install --save-dev gulp-babel @babel/core @babel/preset-env
const babel = require('gulp-babel')

exports.default = function () {
    return src('./src/*.js')
    // 吧src下面的文件经过babel转义
    .pipe(babel({
        presets: ['@babel/env']
    }))
    // 添加lib下的文件
    .pipe(src('lib/*.js'))
    // 第一次输出：吧源文件移到 sources/
    .pipe(dest('sources/'))
    // 压缩js
    .pipe(uglify())
    // 吧源文件，改为 '.min.js' 移到到 dist
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('dest/'))
}



// // 文件名字固定
// function defaultTask (cd) {
//     console.log('hello')
//     cd()
// }
// exports.default = defaultTask