const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    // entry: './src/playground/hoc.js',
    // entry: './src/playground/redux-101.js',
    // entry: './src/playground/redux-expensify.js',
    // entry: './src/playground/destructuring.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 4006,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
}
