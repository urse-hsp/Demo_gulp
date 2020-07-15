// const { series,parallel } = require('gulp')

// const clean = function(cb) {
//     console.log('clean')
//     cb()
// }

// const css = series(clean, function(cb) {
//     console.log('css')
//     cb()
// })

// const javascript = series(clean, function(cb) {
//     console.log('javascript')
//     cb()
// })


// // exports.build = build
// exports.default = parallel(css,javascript) // series顺序执行3.12  parallel并发执行2.01 类似同步异步


const { series,parallel } = require('gulp')

const clean = function(cb) {
    console.log('clean')
    cb()
}

const css = function(cb) {
    console.log('css')
    cb()
}
const javascript = function(cb) {
    console.log('javascript')
    cb()
}

// const css = series(clean, function(cb) {
//     console.log('css')
//     cb()
// })

// const javascript = series(clean, function(cb) {
//     console.log('javascript')
//     cb()
// })


// exports.build = build
exports.default = series(clean,parallel(css,javascript)) // series顺序执行3.12  parallel并发执行2.01 类似同步异步
