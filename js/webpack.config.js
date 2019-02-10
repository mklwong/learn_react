const debug = process.env.NODE_ENV !== 'production';
const path = require('path')

const UglifyJSPluging = require('uglifyjs-webpack-plugin')

module.exports = {
    context: __dirname + '../',
    devtool: debug ? "inline-sourcemap" : null,
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname + '../static'),
        filename: 'script.min.js'
    },
    optimization: {
        minimizer: [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new UglifyJSPluging()
        ]
    },
    devServer: {
        index: '../index.html',
        contentBase: path.join(_dirname),
        disableHostCheck: true
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }
        ]
    }
};