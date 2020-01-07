const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'library.js',
        //不管通过任何方式引入这个库，配置umd都可以让你引入的到
        libraryTarget: 'umd',
        //支持通过script标签引入
        library: 'library'
    },
    externals: ["lodash"]
}