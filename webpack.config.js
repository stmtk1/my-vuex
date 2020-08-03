const webpack = require('webpack')
const path = require('path')

module.exports = {
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
    }
};
