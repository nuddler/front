const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: '3000',
        proxy: {
            '/v1/api': 'http://localhost:8080',
        },
        historyApiFallback: true,
        contentBase: './dist',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: []
});