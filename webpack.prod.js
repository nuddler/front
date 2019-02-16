const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const argv = require('yargs').argv;

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    // optimization: {
    //     minimizer: [
    //         new UglifyJSPlugin({
    //             cache: true,
    //             parallel: true,
    //             sourceMap: true // set to true if you want JS source maps
    //         }),
    //         new OptimizeCSSAssetsPlugin({}),
    //     ],
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env.NODE_ENV': JSON.stringify('production'),
    //         'process.env.APIURL': JSON.stringify(argv.apiurl)
    //     }),
    //     new MiniCssExtractPlugin({
    //         filename: "[name].css",
    //         chunkFilename: "[id].css"
    //     }),
    // ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [

        ]
    }
});