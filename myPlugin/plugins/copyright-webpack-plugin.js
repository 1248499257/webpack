class CopyrightWebpackPlugin {
    constructor(options) {
        // console.log(options)
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            compilation.assets['copyright.txt'] = {
                source: function () {
                    return 'copyright by luo'
                },
                size: function () {
                    return 16;
                }
            }
            cb()
        })
    }
}

module.exports = CopyrightWebpackPlugin