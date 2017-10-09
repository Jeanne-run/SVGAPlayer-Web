var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: {
        "svga.min": "./src/index.js",
    },
    output: {
        path: __dirname,
        filename: "build/[name].js"
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', "stage-0"]
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            output: { comments: false },
        })
    ],
}