/*eslint-disable */
var webpack = require("webpack");

module.exports = {
    entry: "./src/indexExports.js",
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
        path: __dirname + "/lib/",
        filename: 'index.js',
        library: 'jam',
        libraryTarget: 'umd'
    },
    externals: {
    'react': 'react',
    'react-dom': 'react-dom'
    }
};