const loaderUtils = require('loader-utils')

module.exports = function (souce) {
    return souce.replace('luo', '111')
}