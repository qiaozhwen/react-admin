const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
console.log(__dirname, '-------------')
module.exports = {
    mode: 'production',
    entry: {
        'index': './index.tsx'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name]_[hash].js",
        publicPath: "./",
    },
    module: {
        //loaders加载器
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name]_[hash].[ext]',
                    esModule: false,
                    outputPath: '/images'
                }
            },
            {
                test: /\.(tsx|ts)?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "QZ REACT",
            template: 'index.html'
        }),
        // new CopyWebpackPlugin({ // 复制插件
        //     patterns: [{
        //         from: path.resolve(__dirname, '../assests'),
        //         to: path.resolve(__dirname, '../dist/static')
        //     }]
        // })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', 'ts'], //后缀名自动补全
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 5,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
};