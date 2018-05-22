/**
 * Created by jinliang on 2018/5/23.
 */
const path = require('path');

module.exports = {
    entry: './src/Page.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    mode: 'development'
};