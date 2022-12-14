const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production'
    return {
        mode: 'development',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js',
            publicPath: '/dist/',
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
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'style.css',
            }),
        ],
        devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
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
}
