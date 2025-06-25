const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'production',
    output: {
        filename: 'bundle--[hash:base64].js',
    },
    plugins: [new MiniCssExtractPlugin({})],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]',
                                namedExport: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
};

module.exports = merge(baseConfig, config);
