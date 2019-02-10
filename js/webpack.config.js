const debug = process.env.NODE_ENV !== 'production';
const path = require('path')
const webpack = require('webpack')

const UglifyJSPluging = require('uglifyjs-webpack-plugin')

module.exports = {
    
    devtool: debug ? "inline-sourcemap" : null,
    entry: './index.js',
    output: {
        path: __dirname,
        filename: '../static/script.min.js'
    },
    optimization: {
        minimizer: [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new UglifyJSPluging()
        ]
    },
    devServer: {
        index: '../index.html',
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