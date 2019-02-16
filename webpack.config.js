const path = require('path');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader"
            },
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: "css-loader",
                }),
            }

        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin("styles.css"),
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
};