/*eslint-disable */
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "./src/index.js"
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "react-hot!babel"
        }, {
            test: /\.css$/, // Only .css files
            loader: "react-hot!style!css?modules" // Run both loaders
        }]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    output: {
        path: __dirname + "/lib/",
        filename: 'index.js',
    },
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        })
    ]
}