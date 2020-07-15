// const gulp = require('gulp')
const { src, dest } = require('gulp')


// 文件名字固定
function defaultTask (cd) {
    console.log('hello')
    cd()
}
exports.default = defaultTask

// copy功能
// src/所以js文件 ==> dist
// 1. 找到源文件
// 2.找出目标目录
// 3.copy

// src()==> 找到你的源文件

/* 管道，逐级
* --
*    --
*       --
*/

// return
function copy () {
    // 匹配规则 、gulp
    // return src(['./src/index.js','./src/text.js'])
    return src(['./src/**/*.js','!./src/config.js'])
    .pipe(src("./src2/c.js"))
    .pipe(dest('./dist/'));
}
// exports.copy = copy
exports.copy = copy


// nodejs stream
// pipe没有数量限制
