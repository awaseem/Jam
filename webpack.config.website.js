/*eslint-disable */
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/Index.js",
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel"
        }, {
            test: /\.css$/, // Only .css files
            loader: "style!css" // Run both loaders
        }]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: false,
            "process.env.NODE_ENV": "'production'"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        })
    ]
};