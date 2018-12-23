const debug = process.env.NODE_ENV !== 'production';
const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: './index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'index.bundle.js'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    },
    devServer: {
        index: '../index.html',
        contentBase : path.join(__dirname),
        disableHostCheck: true
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env","@babel/preset-react"]
                }
            }
        ]
    }
    /*,
      plugins: debug ? [] :[
          new webpack.optimize.DedupPlugin(),
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.optimize.UglifyJSPlugin({mangle: false, sourcemap: false})
      ]*/
  };