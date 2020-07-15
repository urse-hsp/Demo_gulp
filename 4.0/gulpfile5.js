const { parallel } = require('gulp')

function sleep(time) {
    return new Promise((res) => {
        setTimeout(res,time)
    })
}

async function clean(cb) {
    console.log('1、clean')
        await sleep(1000)
    console.log('1、clean-End')
    cb()
}

async function coopyImg(cb) {
    console.log('2、coopyImg')
        await sleep(100)
    console.log('2、coopyImg-End')
    cb()
}

async function build(cb) {
    console.log('2、build')
        await sleep(2000)
    console.log('2、build-End')
    cb()
}

// exports.build = build
exports.default = parallel(clean,coopyImg,build) // series顺序执行3.12  parallel并发执行2.01 类似同步异步
