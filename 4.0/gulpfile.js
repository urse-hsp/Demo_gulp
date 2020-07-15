const { watch } = require('gulp')


const javascript = function(cb) {
    console.log('javascript==========')
    cb()
}


exports.default = function() {
    watch('src/*.js',{
        ignoreInitial:false
    },javascript)
}