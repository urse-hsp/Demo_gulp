const { series } = require('gulp')

// 私有任务
// clean 并没有被到处，exports 这种属于私有任务
// 他仍然可以被内部的series使用
function clean(cb) {
    console.log('1、clean')
    cb()
}

// 共有任务
// build 有被到处，’exports‘ 这种属于共有任务
// 他仍然可以被内部的series使用
function build(cb) {
    console.log('2、build')
    cb()
}

exports.build = build
exports.default = series(clean,build)


// 老版本
// const gulp = require('gulp');
// gulp.task('default',(cb) => {
//     console.log('default')
//     cb()
// })