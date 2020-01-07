const loaderUtils = require('loader-utils')

module.exports = function (souce) {
    const options = loaderUtils.getOptions(this)
    //声明有异步操作
    const callback = this.async()
    setTimeout(() => {
        const result = souce.replace('111', 'Hello')
        callback(null, result)
    }, 1000)

}