const path = require("path")
const MyZipPlugin = require("./plugins/index")

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'none',
    plugins: [
        new MyZipPlugin({filename: 'offline'})
    ]
}