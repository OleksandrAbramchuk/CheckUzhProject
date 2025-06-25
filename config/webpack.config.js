const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../templates/index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][hash][ext][query]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@app': path.resolve(__dirname, '../src/'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@assets': path.resolve(__dirname, '../src/assets'),
        },
    },
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, '../dist'),
    },
};

module.exports = config;