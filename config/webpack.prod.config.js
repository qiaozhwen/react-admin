const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
console.log(__dirname, '-------------')
module.exports = {
    mode: 'production',
    entry: {
        'index': './index.tsx'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].js",
        chunkFilename: '[name].js',
        publicPath: "./",
    },
    module: {
        //loaders加载器
        rules: [
            {
                test: /\.css$/i,
                // use: ExtractTextPlugin.extract({
                //     use:"css-loader",
                //     fallback:"style-loader",
                // })
                loader:ExtractTextPlugin.extract({
                    use:["css-loader"],
                })
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
        new ExtractTextPlugin({
            filename:`[name]_[hash].css`,
        })
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
            cacheGroups: {
                react: {
                    chunks: 'all',
                    name: 'react',
                    test: ({ resource = '' }) => {
                        const [, modulePath] = resource.split(path.resolve(__dirname, '..', 'node_modules'));
                        return modulePath && modulePath.includes('react');
                    },
                    reuseExistingChunk: true,
                    enforce: true
                },
                echart: {
                    test: (module) => {
                        return /echart/.test(module.context);
                    }, // 直接使用 test 来做路径匹配，echart
                    chunks: "all",
                    name: "echart",
                    reuseExistingChunk: true,
                    enforce: true
                },
                bootstrap: {
                    test: (module) => {
                        return /bootstrap/.test(module.context);
                    }, // 直接使用 test 来做路径匹配，echart
                    chunks: "all",
                    name: "bootstrap",
                    reuseExistingChunk: true,
                    enforce: true
                },
                common: {
                    chunks: "all",
                    name: 'common',
                    minChunks: 2,
                    reuseExistingChunk: true,
                    enforce: true
                },
            }
        }
    }
};